# Konfigurasi IAM/RBAC Minggu 2

## Tujuan
Konfigurasi IAM/RBAC disusun untuk mengatur hak akses anggota tim berdasarkan peran masing-masing, sesuai prinsip least privilege. Setiap anggota hanya diberikan akses seperlunya sesuai tanggung jawabnya dalam proyek.

## Pendekatan
Proyek ini menggunakan Azure Role-Based Access Control (RBAC) untuk membagi hak akses terhadap resource group dan resource Azure yang digunakan dalam pembangunan infrastruktur dasar E-Learning Platform.

## Tabel IAM/RBAC

| No | Nama Anggota | Peran Proyek | Role Azure/RBAC | Scope Akses | Permission Utama | Alasan Pemberian Akses |
|---|---|---|---|---|---|---|
| 1 | Muhammad Arif Afandy | Cloud Architect | Reader | Resource Group `rg-elearning-kel6` | Melihat konfigurasi resource, arsitektur jaringan, VM, load balancer, dan NSG | Bertugas meninjau kesesuaian implementasi dengan desain arsitektur |
| 2 | Tasya Apriliani | DevOps Engineer | Contributor | Resource Group `rg-elearning-kel6` | Membuat, mengubah, dan mengelola resource Azure seperti VNet, subnet, NSG, VM, Public IP, dan Load Balancer | Bertanggung jawab melakukan deployment dan konfigurasi infrastruktur |
| 3 | Jovanka Feranita | Backend Developer | Virtual Machine Contributor / Reader | VM dan resource pendukung aplikasi | Melihat konfigurasi VM, membantu akses environment aplikasi, dan menyesuaikan kebutuhan deployment backend | Bertugas menyiapkan backend agar dapat berjalan di compute layer |
| 4 | Armando Marcello Jessend | Security Engineer | Security Reader / Reader | NSG, networking, dan resource group | Meninjau aturan keamanan, konfigurasi NSG, serta akses jaringan | Bertanggung jawab pada audit dan validasi konfigurasi keamanan |

## Penjelasan Role

### 1. Reader
Role ini memberikan izin untuk melihat konfigurasi resource tanpa dapat mengubahnya. Role ini cocok untuk Cloud Architect dan reviewer keamanan awal karena mereka perlu memeriksa implementasi tanpa berisiko mengubah resource secara langsung.

### 2. Contributor
Role ini memberikan izin untuk membuat dan mengelola hampir seluruh resource Azure, tetapi tidak dapat mengatur akses pengguna lain. Role ini paling sesuai untuk DevOps Engineer karena deployment infrastruktur dilakukan melalui akun ini.

### 3. Virtual Machine Contributor / Reader
Role ini digunakan untuk mendukung kebutuhan Backend Developer agar dapat memahami konfigurasi VM, melakukan pengecekan resource aplikasi, dan membantu integrasi deployment tanpa harus diberi akses penuh ke seluruh resource group.

### 4. Security Reader / Reader
Role ini dipakai untuk Security Engineer agar dapat meninjau konfigurasi keamanan seperti NSG, subnet, dan konektivitas resource tanpa mengubah deployment utama secara langsung.

## Prinsip Least Privilege
Penerapan least privilege pada proyek ini dilakukan dengan cara:
- hanya DevOps Engineer yang diberikan hak Contributor untuk deployment utama
- anggota lain diberikan akses Reader atau akses terbatas sesuai kebutuhan tugas
- akses manajemen keamanan dipisahkan dari akses deployment
- hak akses tidak diberikan secara penuh ke semua anggota agar meminimalkan risiko salah konfigurasi

## Kondisi Implementasi di Azure
Berdasarkan pengecekan pada menu Azure Access Control (IAM), saat ini pengelolaan resource masih terpusat pada satu akun utama yang memiliki role Owner pada tingkat subscription. Kondisi ini menunjukkan bahwa kontrol akses dasar sudah tersedia, namun pembagian role secara langsung untuk setiap anggota kelompok belum diterapkan di Azure Portal. Oleh karena itu, kelompok menyusun dokumen IAM/RBAC sebagai rancangan pembagian akses berbasis peran untuk menerapkan prinsip least privilege pada pengelolaan infrastruktur.

## Kesimpulan
Dokumen IAM/RBAC ini menunjukkan pembagian akses yang ideal untuk proyek E-Learning Platform berbasis Azure. Meskipun implementasi Azure saat ini masih terpusat pada satu akun utama, rancangan RBAC tetap disusun agar pengelolaan resource lebih aman, terstruktur, dan sesuai best practice cloud security.
