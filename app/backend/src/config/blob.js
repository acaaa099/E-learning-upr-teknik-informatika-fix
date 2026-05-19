const {
  BlobServiceClient
} = require('@azure/storage-blob');

const fs = require('fs');

const connectionString =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

const containerName =
  process.env.BLOB_CONTAINER_NAME;

let containerClient = null;

if (connectionString) {

  const blobServiceClient =
    BlobServiceClient.fromConnectionString(
      connectionString
    );

  containerClient =
    blobServiceClient.getContainerClient(
      containerName
    );

}

const uploadToBlob = async (file) => {

  try {

    if (!containerClient) {

      console.log(
        'Blob storage not configured'
      );

      return null;

    }

    const blobName =
      `${Date.now()}-${file.originalname}`;

    const blockBlobClient =
      containerClient.getBlockBlobClient(
        blobName
      );

    const uploadOptions = {};

    if (file.mimetype) {
      uploadOptions.blobHTTPHeaders = {
        blobContentType: file.mimetype
      };
    }

    if (file.buffer) {
      await blockBlobClient.uploadData(
        file.buffer,
        uploadOptions
      );
    } else if (file.path) {
      const fileBuffer =
        fs.readFileSync(file.path);

      await blockBlobClient.uploadData(
        fileBuffer,
        uploadOptions
      );
    } else {
      throw new Error('Invalid file data for blob upload');
    }

    return blockBlobClient.url;

  } catch (error) {

    console.error(
      'Blob upload error:',
      error.message
    );

    return null;

  }

};

module.exports = {
  uploadToBlob
};