# Progress Proyek E-Learning Platform

Dokumen ini berisi perkembangan proyek **E-Learning Platform berbasis Microsoft Azure** dari Minggu 1 sampai Minggu 5. Setiap minggu didokumentasikan berdasarkan target, hasil yang dicapai, kendala yang dihadapi, dan kesiapan untuk tahap berikutnya.

---

## Minggu 1 — Perencanaan dan Arsitektur

### Fokus Minggu 1
Pada Minggu 1, kelompok berfokus pada tahap perencanaan awal proyek. Aktivitas utama meliputi penentuan tema proyek, pemilihan platform cloud, penyusunan diagram arsitektur, estimasi biaya, pembagian tugas anggota kelompok, dan inisialisasi repository GitHub.

### Yang Berhasil Diselesaikan
- Menentukan tema proyek berupa **E-Learning Platform**
- Memilih **Microsoft Azure** sebagai platform cloud utama
- Menyusun diagram arsitektur sistem berbasis Azure
- Menentukan layanan utama yang digunakan, seperti:
  - Azure Front Door
  - Azure Load Balancer
  - Azure Virtual Machine
  - Azure Database for MySQL
  - Azure VNet + NSG
  - Public IP + DNS Zone
  - Azure IAM (RBAC)
  - Azure Monitor + Log Analytics
- Membuat estimasi biaya layanan Azure
- Menyusun pembagian tugas anggota kelompok
- Menyiapkan repository GitHub proyek

### Kendala
Kendala utama pada Minggu 1 adalah menyelaraskan diagram arsitektur, layanan yang dipilih, dan estimasi biaya agar semuanya konsisten dengan implementasi yang akan dilakukan pada tahap berikutnya.

### Hasil Minggu 1
Minggu 1 selesai pada tahap perencanaan dan penyusunan arsitektur. Hasil minggu ini menjadi dasar untuk implementasi infrastruktur pada Minggu 2.

---

## Minggu 2 — Implementasi Infrastruktur Dasar

### Fokus Minggu 2
Pada Minggu 2, kelompok mulai membangun infrastruktur dasar di Microsoft Azure. Fokus utama meliputi pembuatan virtual network, subnet, network security group, virtual machine, load balancer, dokumentasi resource, IAM/RBAC, serta menyiapkan Infrastructure as Code (IaC).

### Yang Berhasil Diselesaikan
- Membuat **Resource Group** `rg-elearning-kel6`
- Membuat **Virtual Network** `vnet-elearning-kel6`
- Menyiapkan subnet awal `default`
- Menambahkan subnet privat `subnet-private-kel6`
- Membuat **Network Security Group** `nsg-elearning-kel6`
- Menambahkan aturan keamanan masuk **allow-ssh-admin** pada port 22/TCP
- Membuat **2 Virtual Machine**:
  - `vm1-elearning-kel6`
  - `vm2-elearning-kel6`
- Membuat **Load Balancer** `lb-elearning-kel6`
- Menambahkan kedua VM ke **backend pool** `be-lb-elearning-kel6`
- Menyiapkan **Public IP**
- Mengecek **IAM** melalui Azure Access Control
- Menyusun **dokumen IAM/RBAC**
- Menyusun **tabel inventaris resource**
- Mengekspor konfigurasi resource ke bentuk **Terraform export** sebagai bukti Infrastructure as Code

### Kendala
Kendala utama pada Minggu 2 adalah:
- proses konfigurasi virtual network yang sempat gagal pada awal pembuatan
- penyesuaian subnet privat agar sesuai dengan requirement tugas
- konfigurasi aturan NSG agar memenuhi prinsip least privilege
- export Terraform yang awalnya belum bisa digunakan karena provider belum terdaftar
- penataan repository GitHub agar lebih rapi dan sesuai dengan implementasi aktual

### Catatan IAM
Berdasarkan pengecekan pada Azure Access Control (IAM), saat ini pengelolaan resource masih terpusat pada satu akun utama yang memiliki role **Owner** pada tingkat subscription. Oleh karena itu, kelompok menyusun dokumen IAM/RBAC sebagai rancangan pembagian akses berbasis peran untuk mendukung prinsip least privilege pada tahap berikutnya.

### Hasil Minggu 2
Minggu 2 berhasil menyelesaikan sebagian besar implementasi infrastruktur dasar. Fondasi cloud untuk proyek E-Learning Platform sudah tersedia dan siap dilanjutkan ke tahap implementasi layanan inti pada Minggu 3.

---

## Minggu 3 — Implementasi Layanan Inti

### Fokus Minggu 3
Pada Minggu 3, kelompok mulai mengimplementasikan layanan inti proyek E-Learning Platform. Fokus utama pada tahap ini adalah pembuatan backend/API, koneksi ke Azure Database for MySQL, integrasi Azure Blob Storage, serta pengujian endpoint secara lokal.

### Yang Berhasil Diselesaikan
- Membuat backend menggunakan Node.js dan Express.js
- Menyusun struktur folder backend:
  - config
  - controllers
  - routes
  - middlewares
- Membuat endpoint health check
- Menghubungkan backend dengan Azure Database for MySQL
- Mengatasi kebutuhan koneksi aman database dengan konfigurasi SSL
- Membuat endpoint untuk data materi
- Melakukan insert data materi ke database
- Menghubungkan backend dengan Azure Blob Storage
- Membuat fitur upload file materi
- Menyimpan filename dan blob_url ke tabel materials

### API Endpoint yang Berhasil Diuji

#### Health Check
**GET /health**

Response:
```json
{
  "status": "OK",
  "message": "Backend is running"
}
```

#### Get All Materials
**GET /materials**

Response:
```json
{
  "success": true,
  "data": []
}
```

#### Get Material by ID
**GET /materials/:id**

#### Create Material
**POST /materials**

Body:
```json
{
  "title": "Materi Cloud Computing",
  "description": "Pengenalan layanan cloud Azure"
}
```

#### Upload File ke Azure Blob Storage
**POST /materials/:id/upload**

Contoh response:
```json
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "id": "1",
    "filename": "materi-test.txt",
    "blob_url": "https://stelearningkel6.blob.core.windows.net/materials/xxxxx-materi-test.txt"
  }
}
```

### Integrasi Database
Backend berhasil terhubung dengan database `elearning` pada Azure Database for MySQL. Tabel utama yang digunakan adalah tabel `materials` dengan kolom:
- id
- title
- description
- filename
- blob_url
- created_at

### Integrasi Azure Blob Storage
File materi berhasil diunggah ke container `materials` pada Storage Account `stelearningkel6`. Setelah upload berhasil, URL file disimpan ke kolom `blob_url` pada tabel `materials`.

### Kendala
Kendala pada Minggu 3 adalah penyesuaian koneksi Azure MySQL yang membutuhkan konfigurasi SSL karena koneksi tidak aman ditolak oleh server. Selain itu, proses pengujian endpoint membutuhkan penyesuaian file `.env` lokal agar backend dapat membaca konfigurasi database dan storage dengan benar.

### Deploy Backend ke VM

- Backend berhasil dideploy ke Azure Virtual Machine (vm1-elearning-kel6)
- Public IP: 70.153.148.189
- API dapat diakses secara publik melalui browser

Contoh endpoint:
- http://70.153.148.189:3000/health
- http://70.153.148.189:3000/materials
  
### Hasil Minggu 3
Minggu 3 berhasil menyelesaikan implementasi backend inti. Backend sudah dapat berjalan secara lokal, terhubung ke Azure Database for MySQL, melakukan insert dan read data materi, serta mengunggah file ke Azure Blob Storage.

### Status
Selesai untuk implementasi backend lokal. Tahap berikutnya adalah deploy backend ke Azure Virtual Machine dan menguji akses dari lingkungan public.
- Backend berhasil dideploy ke VM1 dengan public IP `70.153.148.189`
- Endpoint public `/health` dan `/materials` berhasil diuji dari browser

---

## Minggu 4 — Monitoring, Keamanan, dan Optimasi

### Fokus Minggu 4
Tahap ini akan berfokus pada monitoring resource, penguatan keamanan, optimasi konfigurasi, dan evaluasi biaya operasional.

### Rencana Pekerjaan
- Menyiapkan monitoring dan logging
- Menambah penguatan keamanan
- Meninjau kembali aturan akses dan jaringan
- Mengamati performa resource
- Mengevaluasi biaya penggunaan layanan

### Status
Belum dimulai.

---

## Minggu 5 — Demo Final dan Laporan

### Fokus Minggu 5
Tahap akhir akan berisi finalisasi seluruh proyek, penyusunan laporan akhir, dan persiapan presentasi/demo.

### Rencana Pekerjaan
- Finalisasi dokumentasi proyek
- Penyusunan laporan akhir
- Penyusunan slide presentasi
- Menyiapkan demo sistem
- Melakukan evaluasi akhir hasil proyek

### Status
Belum dimulai.
