# Inventaris Resource Minggu 2

## Tabel Inventaris Resource

| No | Nama Resource | Tipe Resource | Region/Lokasi | Tujuan/Fungsi |
|---|---|---|---|---|
| 1 | rg-elearning-kel6 | Resource Group | Southeast Asia | Wadah utama seluruh resource proyek E-Learning di Azure |
| 2 | vnet-elearning-kel6 | Virtual Network | Indonesia Central | Jaringan virtual utama untuk menghubungkan VM, subnet, dan layanan jaringan lainnya |
| 3 | default | Subnet | Indonesia Central | Subnet awal/default yang saat ini digunakan untuk resource yang sudah lebih dulu dideploy |
| 4 | subnet-private-kel6 | Subnet | Indonesia Central | Subnet privat untuk pemisahan jaringan internal agar arsitektur sesuai requirement Minggu 2 |
| 5 | nsg-elearning-kel6 | Network Security Group (NSG) | Indonesia Central | Mengatur aturan keamanan jaringan masuk dan keluar pada subnet/resource |
| 6 | allow-ssh-admin | Inbound Security Rule (NSG Rule) | Indonesia Central | Mengizinkan akses SSH administratif ke server melalui port 22 |
| 7 | lb-elearning-kel6 | Load Balancer | Indonesia Central | Mendistribusikan trafik ke dua virtual machine backend |
| 8 | be-lb-elearning-kel6 | Backend Pool Load Balancer | Indonesia Central | Menampung VM backend yang menjadi target distribusi trafik dari load balancer |
| 9 | pip-elearning-kel6 | Public IP Address | Indonesia Central | Menyediakan alamat IP publik untuk akses dari internet ke komponen jaringan |
| 10 | vm1-elearning-kel6 | Virtual Machine | Indonesia Central | Server aplikasi 1 pada compute layer |
| 11 | vm1-elearning-kel6-ip | Public IP Address | Indonesia Central | Alamat IP publik untuk VM 1 |
| 12 | vm1-elearning-kel6349 | Network Interface (NIC) | Indonesia Central | Antarmuka jaringan untuk VM 1 agar terhubung ke VNet/subnet |
| 13 | vm1-elearning-kel6_key | SSH Key | Indonesia Central | Kunci SSH untuk akses aman ke VM 1 |
| 14 | vm1-elearning-kel6_OsDisk_1_034edf2701d84264bcc86021f85b6a4a | OS Disk | Indonesia Central | Disk sistem operasi untuk VM 1 |
| 15 | vm2-elearning-kel6 | Virtual Machine | Indonesia Central | Server aplikasi 2 pada compute layer |
| 16 | vm2-elearning-kel6-ip | Public IP Address | Indonesia Central | Alamat IP publik untuk VM 2 |
| 17 | vm2-elearning-kel6150 | Network Interface (NIC) | Indonesia Central | Antarmuka jaringan untuk VM 2 agar terhubung ke VNet/subnet |
| 18 | vm2-elearning-kel6_key | SSH Key | Indonesia Central | Kunci SSH untuk akses aman ke VM 2 |
| 19 | vm2-elearning-kel6_OsDisk_1_a9759b69fe074410a2df9f6235e15293 | OS Disk | Indonesia Central | Disk sistem operasi untuk VM 2 |

## Catatan
Resource Group berada pada lokasi Southeast Asia, sedangkan sebagian besar resource operasional berada di region Indonesia Central.
