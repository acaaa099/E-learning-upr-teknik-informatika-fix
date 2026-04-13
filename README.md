# 🎓 E-Learning Platform — AWS Cloud Infrastructure

<div align="center">

![AWS](https://img.shields.io/badge/Cloud-Amazon_AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Terraform](https://img.shields.io/badge/IaC-Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white)
![Status](https://img.shields.io/badge/Status-Minggu_1_✅-brightgreen?style=flat-square)
![Biaya Trial](https://img.shields.io/badge/Biaya_Trial-Rp_0%2Fbulan-blue?style=flat-square)

**Final Project Cloud Computing (A) — Kelompok 6**  
Teknik Informatika · Universitas Palangka Raya · 2025/2026

</div>

---

## 📌 Deskripsi

Platform e-learning berbasis **Amazon Web Services (AWS)** dengan arsitektur multi-layer yang skalabel. Dibangun sebagai implementasi nyata cloud engineering sesuai standar industri: Infrastructure as Code (Terraform), least-privilege security, dan monitoring real-time.

---

## 🏗️ Arsitektur

```
Internet → CloudFront (CDN) → ALB (Load Balancer)
                                    ↓          ↓
                               EC2 #1      EC2 #2  (t2.micro × 2)
                                    ↓          ↓
                    ┌───────────────────────────────┐
                    │  S3 │ RDS MySQL │ Cognito Auth │
                    └───────────────────────────────┘
                    ┌───────────────────────────────┐
                    │    IAM + Secrets Manager      │
                    │    CloudWatch Monitoring      │
                    └───────────────────────────────┘
```

---

## ☁️ Layanan AWS

| Layanan | Layer | Fungsi |
|---------|-------|--------|
| Amazon CloudFront | CDN | Distribusi konten statis via edge caching |
| Application Load Balancer | Networking | Distribusi traffic ke EC2 instance |
| Amazon EC2 (t2.micro × 2) | Compute | App server backend (auto-scaling) |
| Amazon S3 | Storage | File materi: video, PDF, gambar |
| Amazon RDS MySQL (db.t3.micro) | Database | Data kursus, pengguna, progress belajar |
| Amazon Cognito | Auth | Login, registrasi, manajemen sesi |
| AWS IAM + Secrets Manager | Security | Least privilege + kredensial terenkripsi |
| Amazon CloudWatch | Monitoring | Log, metrik CPU/memory, alerting |

---

## 💰 Estimasi Biaya

> Kurs: **1 USD = Rp 17.000** (Bank Indonesia, April 2026) · Region: **ap-southeast-2 (Sydney)**

| Fase | Durasi | Biaya/Bulan |
|------|--------|:-----------:|
| **Masa Trial (Free Tier)** | Bulan 1–12 | **Rp 0** ✅ |
| **Setelah Trial** | Bulan 13+ | ~Rp 294.100 |

**Selama proyek 5 minggu ini: total biaya = Rp 0** (seluruh layanan dalam batas AWS Free Tier dengan EC2 t2.micro).

<details>
<summary>Rincian biaya per layanan (masa trial)</summary>

| Layanan | USD/Bln | Keterangan |
|---------|:-------:|-----------|
| CloudFront | $0.00 | Free Tier permanen |
| ALB | $0.00 | Free Tier 12 bln (750 LCU-hours/bln) |
| EC2 t2.micro × 2 | $0.00 | Free Tier 12 bln (750 jam/bln) |
| S3 | $0.00 | Free Tier 12 bln (5 GB + 20K GET/bln) |
| RDS db.t3.micro | $0.00 | Free Tier 12 bln (750 jam + 20 GB) |
| Cognito | $0.00 | Free Tier permanen (50K MAU) |
| IAM Access Analyzer | $0.00 | Gratis sepenuhnya |
| Secrets Manager | $0.00 | Trial 30 hari per secret |
| CloudWatch | $0.00 | Free Tier permanen (10 alarm) |
| **TOTAL** | **$0.00** | **GRATIS ✓** |

</details>

---

## 👥 Anggota Kelompok

| Nama | NIM | Peran |
|------|-----|-------|
| Muhammad Arif Afandy | 2330105030006 | ☁️ Cloud Architect |
| Tasya Apriliani | 2330105030007 | ⚙️ DevOps Engineer |
| Armando Marcello Jessend | 2330105030012 | 🛡️ Security Engineer |
| Jovanka Feranita | 2330105030014 | 💻 Backend Developer |

---

## 📁 Struktur Repository

```
├── README.md
├── .gitignore
├── docs/
│   ├── arsitektur-diagram.drawio
│   ├── arsitektur-diagram.png
│   ├── estimasi-biaya-aws.docx
│   └── laporan/
│       └── laporan-minggu1.docx
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── modules/
│       ├── networking/   # VPC, Subnet, Security Groups
│       ├── compute/      # EC2, ALB, Auto Scaling
│       ├── database/     # RDS MySQL
│       ├── storage/      # S3
│       ├── cdn/          # CloudFront
│       ├── auth/         # Cognito
│       ├── security/     # IAM, Secrets Manager
│       └── monitoring/   # CloudWatch
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── Dockerfile
└── scripts/
    ├── deploy.sh
    └── test-endpoints.sh
```

---

## 🚀 Cara Menjalankan

### Prasyarat
- AWS CLI v2 · Terraform ≥ 1.5 · Python ≥ 3.10

```bash

```

### Deploy Infrastruktur

```bash

```

### Jalankan Backend

```bash

```

---

## 📅 Progress

| Minggu | Deliverable | Bobot | Status |
|--------|-------------|:-----:|--------|
| 1 | Perencanaan & Arsitektur | 10% | ✅ Selesai |
| 2 | Implementasi Infrastruktur | 20% | 🔄 In Progress |
| 3 | Implementasi Layanan Inti | 25% | ⏳ |
| 4 | Monitoring & Keamanan | 20% | ⏳ |
| 5 | Demo Final & Laporan | 25% | ⏳ |

---

## 🔒 Keamanan

- Credentials **tidak pernah di-commit** — disimpan di AWS Secrets Manager
- S3 bucket private — akses hanya via CloudFront (OAC)
- IAM least privilege — setiap layanan hanya dapat izin minimal
- File `.env`, `*.tfvars`, `*.pem`, `terraform.tfstate` sudah masuk `.gitignore`

---

## 📄 Dokumen Proyek

- 📝 [Laporan Tugas Minggu 1](https://drive.google.com/drive/folders/1pJUb0lmq-Y6LAHOJX3bs5u0-xI5DwpAV?usp=drive_link)
- 🖼️ [Diagram Arsitektur](https://drive.google.com/drive/folders/1pJUb0lmq-Y6LAHOJX3bs5u0-xI5DwpAV?usp=drive_link)
- 🔗 [Repository GitHub](https://github.com/acaaa099/portal-informasi-kampus-upr)

---

<div align="center">

**Kelompok 6 · Cloud Computing (A) · Teknik Informatika UPR · 2025/2026**

</div>
