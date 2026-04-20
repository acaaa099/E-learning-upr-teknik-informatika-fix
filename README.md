# E-Learning Platform — Microsoft Azure Cloud Infrastructure

<div align="center">

![Azure](https://img.shields.io/badge/Cloud-Microsoft_Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![Status](https://img.shields.io/badge/Project-Final_Project-blue?style=flat-square)
![Semester](https://img.shields.io/badge/Mata_Kuliah-Cloud_Computing_(A)-informational?style=flat-square)

**Final Project Cloud Computing (A) — Kelompok 6**  
Teknik Informatika · Universitas Palangka Raya · 2025/2026

</div>

---

## Deskripsi Singkat

Repository ini digunakan untuk mendokumentasikan dan mengembangkan proyek **E-Learning Platform berbasis Microsoft Azure** selama 5 minggu pengerjaan.  
Struktur repository dibuat per minggu agar rapi, mudah dipantau, dan memudahkan pembagian tugas anggota kelompok.

---

## Arsitektur Inti

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
- Azure VNet + NSG
- Public IP + DNS Zone
- Azure IAM (RBAC)
- Azure Monitor + Log Analytics

---

## Struktur Repository

```text
.
├── README.md
├── .gitignore
├── docs/
│   ├── laporan-proyek.docx
│   ├── laporan-proyek.pdf
│   ├── inventaris-resource.md
│   ├── konfigurasi-iam.md
│   ├── progress-minggu2.md
│   └── screenshots/
├── terraform/
│   └── export/
│       └── main.tf
├── assets/
│   └── diagrams/
└── app/
    ├── backend/
    └── frontend/
```

---

## Penjelasan Folder Per Minggu

### `docs/week1-planning/`
Berisi seluruh dokumen perencanaan awal:
- latar belakang
- tujuan proyek
- diagram arsitektur
- estimasi biaya
- pembagian tugas
- link repository

### `docs/week2-infrastructure/`
Berisi bukti implementasi infrastruktur dasar:
- konfigurasi virtual network
- subnet
- IAM / RBAC
- inventaris resource
- progress mingguan

### `docs/week3-core-services/`
Berisi implementasi layanan inti:
- database
- aplikasi/backend
- pengujian fungsional
- bukti integrasi komponen

### `docs/week4-monitoring-security/`
Berisi monitoring, keamanan, backup, dan analisis biaya:
- dashboard
- alerting
- audit keamanan
- backup & restore
- optimasi biaya

### `docs/week5-final-demo/`
Berisi semua dokumen final:
- laporan akhir
- slide presentasi
- script demo
- refleksi individu

---

## Rekomendasi Isi Commit

- `docs: add week 1 planning report and architecture diagram`
- `infra: add terraform base modules for networking and compute`
- `feat: add backend starter for e-learning platform`
- `docs: add week 3 testing evidence`
- `monitoring: add dashboard screenshots and alert config`
- `final: add final report and presentation slides`

---

## Anggota Kelompok

| Nama | NIM | Peran |
|---|---|---|
| Muhammad Arif Afandy | 2330105030006 | Cloud Architect |
| Tasya Apriliani | 2330105030007 | DevOps Engineer |
| Armando Marcello Jessend | 2330105030012 | Security Engineer |
| Jovanka Feranita | 2330105030014 | Backend Developer |

---

## Catatan

Struktur ini disiapkan agar repository terlihat rapi sejak Minggu 1 sampai Minggu 5.  
Kalian tinggal mengisi file dan bukti sesuai progres tiap minggu tanpa perlu bongkar struktur lagi.

