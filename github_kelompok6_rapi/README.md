# E-Learning Platform — Microsoft Azure Cloud Infrastructure

<div align="center">

![Azure](https://img.shields.io/badge/Cloud-Microsoft_Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![Status](https://img.shields.io/badge/Status-Minggu_1_Selesai-brightgreen?style=flat-square)
![Project](https://img.shields.io/badge/Final_Project-Cloud_Computing-blue?style=flat-square)

**Final Project Cloud Computing (A) — Kelompok 6**  
Teknik Informatika · Universitas Palangka Raya · 2025/2026

</div>

---

## Deskripsi Proyek

Proyek ini merupakan perancangan **platform e-learning berbasis cloud** menggunakan **Microsoft Azure**.  
Fokus pada Minggu 1 adalah menyusun **arsitektur sistem**, menentukan layanan cloud yang digunakan, membuat estimasi biaya, serta menyiapkan dokumentasi awal proyek.

Platform ini dirancang agar mampu:
- menyediakan akses pembelajaran online bagi mahasiswa dan dosen,
- mendukung performa yang stabil untuk banyak pengguna,
- memiliki pengelolaan jaringan, keamanan, dan monitoring yang rapi,
- menjadi dasar implementasi bertahap untuk minggu berikutnya.

---

## Arsitektur Sistem

Alur utama sistem:

```text
Internet User
   ↓
Azure Front Door (CDN)
   ↓
Azure Load Balancer
   ↓
Azure VM Instance 1      Azure VM Instance 2
          \            /
           \          /
        Azure Database for MySQL
```

Komponen pendukung:
- **Azure VNet + NSG** → jaringan virtual dan keamanan subnet
- **Public IP + DNS Zone** → akses publik dan routing domain
- **Azure IAM (RBAC)** → kontrol akses dan role
- **Azure Monitor + Log Analytics** → monitoring, logging, dan alert

---

## Layanan Microsoft Azure yang Digunakan

| Layanan | Layer | Fungsi |
|---|---|---|
| Azure Front Door | CDN | Entry point, edge caching, dan global delivery |
| Azure Load Balancer | Traffic | Mendistribusikan traffic ke instance aplikasi |
| Azure Virtual Machine (2 instance) | Compute | Menjalankan aplikasi/backend |
| Azure Database for MySQL | Data | Menyimpan data pengguna, materi, dan aktivitas belajar |
| Azure VNet + NSG | Networking | Mengatur jaringan virtual dan keamanan akses |
| Public IP + DNS Zone | Networking | Routing dan akses dari internet |
| Azure IAM (RBAC) | Security | Pengaturan hak akses dan role |
| Azure Monitor + Log Analytics | Monitoring | Log, metric, dan pemantauan performa |

---

## Struktur Repository

```text
.
├── README.md
├── .gitignore
├── docs/
│   ├── architecture/
│   │   ├── diagram_azure_kelompok6_fix.drawio
│   │   └── diagram_azure_kelompok6_fix.png
│   └── planning/
│       ├── laporan-minggu1.md
│       └── catatan-upload.txt
└── assets/
```

---

## Progress Proyek

| Minggu | Fokus | Status |
|---|---|---|
| Minggu 1 | Perencanaan & Arsitektur | ✅ Selesai |
| Minggu 2 | Implementasi Infrastruktur Dasar | ⏳ Belum dimulai |
| Minggu 3 | Implementasi Layanan Inti | ⏳ Belum dimulai |
| Minggu 4 | Monitoring, Keamanan & Optimasi | ⏳ Belum dimulai |
| Minggu 5 | Demo Final & Laporan | ⏳ Belum dimulai |

---

## Anggota Kelompok

| Nama | NIM | Peran |
|---|---|---|
| Muhammad Arif Afandy | 2330105030006 | Cloud Architect |
| Tasya Apriliani | 2330105030007 | DevOps Engineer |
| Armando Marcello Jessend | 2330105030012 | Security Engineer |
| Jovanka Feranita | 2330105030014 | Backend Developer |

---

## Dokumen Proyek

Simpan dokumen berikut di folder `docs/`:
- diagram arsitektur final (`.drawio` dan `.png`)
- laporan minggu 1
- estimasi biaya Azure
- screenshot atau bukti perencanaan

---

## Catatan

Repository ini disusun untuk kebutuhan dokumentasi dan pengembangan bertahap proyek **E-Learning Platform berbasis Microsoft Azure**.  
Struktur dapat diperluas pada minggu selanjutnya sesuai implementasi yang dikerjakan.

---

<div align="center">

**Kelompok 6 · Cloud Computing (A) · Teknik Informatika UPR**

</div>
