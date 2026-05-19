import './style.css';

// ======================
// KONSTANTA & KONFIGURASI
// ======================

const API_URL = 'http://localhost:3000';

const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user'
};

// ======================
// STATE MANAGEMENT
// ======================

const AppState = {

  loginRole: null,

  get token() {

    return localStorage.getItem(
      STORAGE_KEYS.TOKEN
    );

  },

  get user() {

    const userStr =
      localStorage.getItem(
        STORAGE_KEYS.USER
      );

    return userStr
      ? JSON.parse(userStr)
      : null;

  },

  setAuth(token, user) {

    localStorage.setItem(
      STORAGE_KEYS.TOKEN,
      token
    );

    localStorage.setItem(
      STORAGE_KEYS.USER,
      JSON.stringify(user)
    );

  },

  clearAuth() {

    localStorage.clear();

  },

  get isAuthenticated() {

    return !!this.token;

  }

};

// ======================
// UTILITIES
// ======================

function showNotification(message) {

  alert(message);

}

function formatDate(dateString) {

  if (!dateString)
    return '';

  const date =
    new Date(dateString);

  return date.toLocaleDateString(
    'id-ID',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  );

}

// ======================
// API SERVICES
// ======================

const api = {

  async request(
    endpoint,
    options = {}
  ) {

    const headers = {};

    if (!options.isFormData) {

      headers['Content-Type'] =
        'application/json';

    }

    if (AppState.token) {

      headers.Authorization =
        `Bearer ${AppState.token}`;

    }

    const response =
      await fetch(
        `${API_URL}${endpoint}`,
        {
          ...options,
          headers: {
            ...headers,
            ...(options.headers || {})
          }
        }
      );

    if (response.status === 401) {

      AppState.clearAuth();
      window.location.reload();
      throw new Error('Sesi telah berakhir, silakan login kembali.');

    }

    const data =
      await response.json();

    if (!response.ok) {

      throw new Error(
        data.message ||
        'Request gagal'
      );

    }

    return data;

  },

  login(credentials) {

    return this.request(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(credentials)
      }
    );

  },

  getMaterials() {

    return this.request(
      '/materials'
    );

  },

  deleteMaterial(id) {

    return this.request(
      `/materials/${id}`,
      {
        method: 'DELETE'
      }
    );

  },

  updateMaterial(
    id,
    data
  ) {

    return this.request(
      `/materials/${id}`,
      {
        method: 'PUT',
        body: JSON.stringify(data)
      }
    );

  },

  getMaterialById(id) {

    return this.request(
      `/materials/${id}`
    );

  }

};

// ======================
// COMPONENTS
// ======================

const components = {

  renderLoginSelection() {

    return `
      <div class="auth-container">
        <div class="form-card">
          <div class="form-header">
            <div class="form-icon">🎓</div>
            <h2>Pilih Peran Login</h2>
          </div>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <button id="btnRoleStudent" class="btn-primary btn-full">
              Login Mahasiswa
            </button>
            <button id="btnRoleAdmin" class="btn-primary btn-full" style="background-color: var(--text-color);">
              Login Dosen / Admin
            </button>
          </div>
        </div>
      </div>
    `;

  },

  renderLoginForm(role) {

    const roleTitle = role === 'admin' ? 'Dosen / Admin' : 'Mahasiswa';

    return `
      <div class="auth-container">

        <div class="form-card">

          <button id="btnBackRole" style="background: none; border: none; cursor: pointer; margin-bottom: 1rem; color: var(--primary-color);">
            ← Kembali
          </button>

          <div class="form-header">

            <div class="form-icon">
              🎓
            </div>

            <h2>
              Login ${roleTitle}
            </h2>

          </div>

          <form
            id="loginForm"
            class="upload-form"
          >

            <input
              type="hidden"
              id="loginRole"
              value="${role}"
            />

            <input
              type="email"
              id="email"
              placeholder="Masukkan Email"
              required
            />

            <input
              type="password"
              id="password"
              placeholder="Masukkan Password"
              required
            />

            <button
              type="submit"
              class="btn-primary btn-full"
            >
              Login
            </button>

          </form>

        </div>

      </div>
    `;

  },

  renderNavbar() {

    const user =
      AppState.user;

    return `
      <nav class="navbar">

        <div class="container">

          <div class="navbar-brand">

            <div class="brand-icon">
              📚
            </div>

            <h1>
              E-Learning
              <span>Kelompok 6</span>
            </h1>

          </div>

          ${
            user
              ? `
                <div class="navbar-user">

                  <div class="user-info">

                    <div class="user-avatar">
                      ${user.name.charAt(0).toUpperCase()}
                    </div>

                    <div class="user-details">

                      <p class="user-name">
                        ${user.name}
                      </p>

                      <p class="user-email">
                        ${user.email}
                      </p>

                    </div>

                  </div>

                  <button
                    id="logoutBtn"
                    class="btn-logout"
                  >
                    Logout
                  </button>

                </div>
              `
              : ''
          }

        </div>

      </nav>
    `;

  },

  renderHero() {

    const user =
      AppState.user;

    return `
      <div class="hero">

        <div class="hero-content">

          <div class="hero-left">

            <div class="greeting-badge">
              👋
            </div>

            <div>

              <h2 class="greeting-title">
                Selamat Datang,
                ${user.name}
              </h2>

              <p class="greeting-subtitle">
                Anda berhasil login
              </p>

            </div>

          </div>

        </div>

      </div>
    `;

  },

  renderUploadForm() {

    if (
      AppState.user?.role !== 'admin'
    ) {

      return '';

    }

    return `
      <div class="upload-card">

        <h3>
          Upload Materi
        </h3>

        <form
          id="uploadForm"
          class="upload-form"
        >

          <input
            type="text"
            id="title"
            placeholder="Judul Materi"
            required
          />

          <textarea
            id="description"
            placeholder="Deskripsi"
          ></textarea>

          <input
            type="file"
            id="file"
            required
          />

          <button
            type="submit"
            class="btn-primary btn-full"
          >
            Upload Materi
          </button>

        </form>

      </div>
    `;

  },

renderMaterialsList(materials) {

  const isAdmin =
    AppState.user?.role === 'admin';

  // ======================
  // DASHBOARD ADMIN
  // ======================

  if (isAdmin) {

    return `
      <div class="materials-grid">

        ${materials.map(material => `

          <div class="material-card">

            <h3>
              ${material.title}
            </h3>

            <p>
              ${material.description || '-'}
            </p>

            <small>
              ${formatDate(material.created_at)}
            </small>

            <div class="material-actions">

              <a
                href="${material.blob_url}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-download"
              >
                Download
              </a>

              <button
                type="button"
                class="btn-view"
                data-id="${material.id}"
              >
                Detail
              </button>

              <button
                class="btn-delete"
                data-id="${material.id}"
              >
                Hapus
              </button>

            </div>

          </div>

        `).join('')}

      </div>
    `;

  }

  // ======================
  // DASHBOARD MAHASISWA
  // ======================

  return `
    <div class="materials-grid">

      ${materials.map(material => `

        <div class="material-card">

          <h3>
            ${material.title}
          </h3>

          <p>
            ${material.description || '-'}
          </p>

          <small>
            ${formatDate(material.created_at)}
          </small>

          <div class="material-actions">

            <a
              href="${material.blob_url}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-download"
            >
              Download
            </a>

            <a
              href="${material.blob_url}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-view"
            >
              Lihat File
            </a>

          </div>

        </div>

      `).join('')}

    </div>
  `;

},

  renderMaterialDetail(material) {

    if (!material) {
      return '';
    }

    if (AppState.user?.role !== 'admin') {
      return `
        <div class="material-detail-card">

          <div class="section-header-top">
            <h3>Detail Materi</h3>
          </div>

          <div class="material-detail-readonly">
            <p><strong>Judul Materi:</strong> ${material.title}</p>
            <p><strong>Deskripsi:</strong> ${material.description || '-'}</p>
            <p><strong>Nama File:</strong> ${material.filename || 'Tidak tersedia'}</p>
            <p><strong>Uploaded:</strong> ${formatDate(material.created_at)}</p>
            ${material.blob_url ? `
            <p>
              <strong>File:</strong>
              <a
                href="${material.blob_url}"
                target="_blank"
                rel="noopener noreferrer"
              >Download</a>
            </p>
          ` : ''}
          </div>

        </div>
      `;
    }

    return `
      <div class="material-detail-card">

        <div class="section-header-top">
          <h3>Detail Materi</h3>
        </div>

        <form id="materialDetailForm" class="upload-form">

          <input type="hidden" id="detailId" value="${material.id}" />

          <label>
            Judul Materi
            <input
              type="text"
              id="detailTitle"
              value="${material.title}"
              required
            />
          </label>

          <label>
            Deskripsi
            <textarea
              id="detailDescription"
            >${material.description || ''}</textarea>
          </label>

          <p>
            <strong>Nama File:</strong>
            ${material.filename || 'Tidak tersedia'}
          </p>

          <p>
            <strong>Uploaded:</strong>
            ${formatDate(material.created_at)}
          </p>

          ${material.blob_url ? `
            <p>
              <strong>File:</strong>
              <a
                href="${material.blob_url}"
                target="_blank"
                rel="noopener noreferrer"
              >Download</a>
            </p>
          ` : ''}

          <button
            type="submit"
            class="btn-primary btn-full"
          >
            Simpan Perubahan
          </button>

        </form>

      </div>
    `;

  }

};

function renderApp() {

  let mainContent = '';

  // ======================
  // BELUM LOGIN
  // ======================

  if (!AppState.isAuthenticated) {

    if (!AppState.loginRole) {

      mainContent =
        components.renderLoginSelection();

    }

    else {

      mainContent =
        components.renderLoginForm(
          AppState.loginRole
        );

    }

  }

  // ======================
  // LOGIN ADMIN
  // ======================

  else if (
    AppState.user?.role === 'admin'
  ) {

    mainContent = `

      ${components.renderHero()}

      <div class="dashboard-container">

        ${components.renderUploadForm()}

        <div class="materials-card">

          <div class="section-header-top">

            <h3>
              Daftar Materi Admin
            </h3>

            <button
              id="loadBtn"
              class="btn-refresh-header"
            >
              Refresh
            </button>

          </div>

          <div id="materialDetail"></div>

          <div id="materialsList">
            Loading...
          </div>

        </div>

      </div>

    `;

  }

  // ======================
  // LOGIN MAHASISWA
  // ======================

  else {

    mainContent = `

      ${components.renderHero()}

      <div class="dashboard-container">

        <div class="materials-card">

          <div class="section-header-top">

            <h3>
              Materi Pembelajaran
            </h3>

            <button
              id="loadBtn"
              class="btn-refresh-header"
            >
              Refresh
            </button>

          </div>

          <div id="materialsList">
            Loading...
          </div>

        </div>

      </div>

    `;

  }

  document.querySelector('#app').innerHTML = `

    <div class="app-container">

      ${components.renderNavbar()}

      <main class="main-content">

        <div class="container">

          ${mainContent}

        </div>

      </main>

    </div>

  `;

  attachEventHandlers();

}

// ======================
// EVENT HANDLERS
// ======================

function attachEventHandlers() {

  // ROLE SELECTION
  const btnRoleStudent = document.getElementById('btnRoleStudent');
  if (btnRoleStudent) {
    btnRoleStudent.addEventListener('click', () => {
      AppState.loginRole = 'student';
      renderApp();
    });
  }

  const btnRoleAdmin = document.getElementById('btnRoleAdmin');
  if (btnRoleAdmin) {
    btnRoleAdmin.addEventListener('click', () => {
      AppState.loginRole = 'admin';
      renderApp();
    });
  }

  const btnBackRole = document.getElementById('btnBackRole');
  if (btnBackRole) {
    btnBackRole.addEventListener('click', () => {
      AppState.loginRole = null;
      renderApp();
    });
  }

  // LOGIN
  const loginForm =
    document.getElementById(
      'loginForm'
    );

  if (loginForm) {

    loginForm.addEventListener(
      'submit',
      async (e) => {

        e.preventDefault();

        const email =
          document.getElementById(
            'email'
          ).value;

        const password =
          document.getElementById(
            'password'
          ).value;

        try {

          const result =
            await api.login({
              email,
              password
            });

          AppState.setAuth(
            result.token,
            result.user
          );

          renderApp();

        } catch (error) {

          showNotification(
            error.message
          );

        }

      }
    );

  }

  // LOGOUT
  const logoutBtn =
    document.getElementById(
      'logoutBtn'
    );

  if (logoutBtn) {

    logoutBtn.addEventListener(
      'click',
      handleLogout
    );

  }

  // UPLOAD
  const uploadForm =
    document.getElementById(
      'uploadForm'
    );

  if (uploadForm) {

    uploadForm.addEventListener(
      'submit',
      handleUpload
    );

  }

  // REFRESH
  const loadBtn =
    document.getElementById(
      'loadBtn'
    );

  if (loadBtn) {

    loadBtn.addEventListener(
      'click',
      loadAndRenderMaterials
    );

    loadAndRenderMaterials();

  }

  // HAPUS MATERI (DELEGASI EVENT)
  const materialsList = document.getElementById('materialsList');
  if (materialsList) {

    materialsList.addEventListener('click', async (e) => {

      if (e.target.classList.contains('btn-delete')) {

        const id = e.target.getAttribute('data-id');

        if (confirm('Apakah Anda yakin ingin menghapus materi ini?')) {

          try {

            await api.deleteMaterial(id);
            showNotification('Materi berhasil dihapus');
            loadAndRenderMaterials();

          } catch (error) {

            showNotification(error.message);

          }

        }

      }

      if (e.target.classList.contains('btn-view')) {

        const id = e.target.getAttribute('data-id');

        if (id) {
          await handleViewMaterial(id);
        }

      }

    });

  }

}

// ======================
// FUNCTIONS
// ======================

async function handleLogout() {

  AppState.clearAuth();
  AppState.loginRole = null;

  renderApp();

}

async function handleUpload(e) {

  e.preventDefault();

  const title =
    document.getElementById(
      'title'
    ).value;

  const description =
    document.getElementById(
      'description'
    ).value;

  const file =
    document.getElementById(
      'file'
    ).files[0];

  const formData =
    new FormData();

  formData.append(
    'title',
    title
  );

  formData.append(
    'description',
    description
  );

  formData.append(
    'file',
    file
  );

  try {

    await api.request('/materials', {
      method: 'POST',
      body: formData,
      isFormData: true
    });

    showNotification(
      'Upload berhasil'
    );

    e.target.reset();

    loadAndRenderMaterials();

  } catch (error) {

    showNotification(
      error.message
    );

  }

}

async function handleViewMaterial(id) {

  const materialDetail =
    document.getElementById(
      'materialDetail'
    );

  if (!materialDetail) {
    return;
  }

  try {

    const result =
      await api.getMaterialById(id);

    materialDetail.innerHTML =
      components.renderMaterialDetail(
        result.data
      );

    const materialDetailForm = document.getElementById('materialDetailForm');
    if (materialDetailForm) {
      materialDetailForm.addEventListener(
        'submit',
        handleUpdateMaterial
      );
    }

  } catch (error) {

    materialDetail.innerHTML =
      '<p>Gagal memuat detail materi.</p>';

  }

}

async function handleUpdateMaterial(e) {

  e.preventDefault();

  const id =
    document.getElementById('detailId')?.value;

  const title =
    document.getElementById('detailTitle')?.value;

  const description =
    document.getElementById('detailDescription')?.value;

  if (!id) {
    showNotification('Material tidak ditemukan');
    return;
  }

  try {

    await api.updateMaterial(id, {
      title,
      description
    });

    showNotification('Detail materi berhasil diperbarui');
    loadAndRenderMaterials();
    await handleViewMaterial(id);

  } catch (error) {

    showNotification(error.message);

  }

}

async function loadAndRenderMaterials() {

  const materialsList =
    document.getElementById(
      'materialsList'
    );

  const materialDetail =
    document.getElementById(
      'materialDetail'
    );

  if (materialDetail) {
    materialDetail.innerHTML = '';
  }

  if (!materialsList)
    return;

  try {

    const result =
      await api.getMaterials();

    materialsList.innerHTML =
      components.renderMaterialsList(
        result.data || []
      );

     

  } catch (error) {

    materialsList.innerHTML =
      '<h3>Gagal memuat materi</h3>';

  }

}

// ======================
// START APP
// ======================

renderApp();