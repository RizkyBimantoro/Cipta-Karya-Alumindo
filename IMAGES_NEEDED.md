# 📸 Daftar Gambar yang Perlu Ditambahkan

## 🎯 Lokasi Gambar dalam Website

### 1. **Logo Perusahaan** (3 tempat)
- **Header** (line 34): `<img src="..." alt="Logo">`
- **Footer** (line 524): `<img src="..." alt="Logo">`
- **Favicon** (line 15): `<link rel="icon">`
- **Ukuran**: 512x512px atau 1024x1024px (format PNG transparan)
- **Nama file**: `logo.png` atau `logo.svg`

### 2. **Foto Tim/Workshop** (Section Tentang Kami)
- **Lokasi** (line 78): Section Tentang Kami
- **Ukuran**: 800x600px atau lebih
- **Konten**: Foto tim kerja, workshop, atau proses produksi
- **Nama file**: `team-workshop.jpg`

### 3. **Foto Portofolio/Galeri** (12 gambar)
Lokasi: Section Galeri (line 229-336)

#### Gambar yang dibutuhkan:
1. **Kitchenset 1** - `kitchenset-1.jpg`
2. **Kitchenset 2** - `kitchenset-2.jpg`
3. **Kusen Aluminium** - `kusen-aluminium.jpg`
4. **Pintu Aluminium** - `pintu-aluminium.jpg`
5. **Jendela Aluminium** - `jendela-aluminium.jpg`
6. **Partisi Kaca** - `partisi-kaca.jpg`
7. **Lemari/Wardrobe** - `lemari-wardrobe.jpg`
8. **Shower Screen** - `shower-screen.jpg`
9. **Proyek Rumah 1** - `proyek-rumah-1.jpg`
10. **Proyek Rumah 2** - `proyek-rumah-2.jpg`
11. **Proyek Kantor** - `proyek-kantor.jpg`
12. **Detail Finishing** - `detail-finishing.jpg`

**Ukuran**: 800x600px atau 1200x800px
**Format**: JPG (optimized untuk web)

---

## 📁 Struktur Folder yang Disarankan

```
d:\Cipta Karya Alumindo\
├── images/
│   ├── logo.png
│   ├── logo.svg (optional)
│   ├── team-workshop.jpg
│   └── portfolio/
│       ├── kitchenset-1.jpg
│       ├── kitchenset-2.jpg
│       ├── kusen-aluminium.jpg
│       ├── pintu-aluminium.jpg
│       ├── jendela-aluminium.jpg
│       ├── partisi-kaca.jpg
│       ├── lemari-wardrobe.jpg
│       ├── shower-screen.jpg
│       ├── proyek-rumah-1.jpg
│       ├── proyek-rumah-2.jpg
│       ├── proyek-kantor.jpg
│       └── detail-finishing.jpg
```

---

## 🔧 Cara Menambahkan Gambar

### Opsi 1: Upload ke Folder Lokal
1. Buat folder `images` dan `images/portfolio`
2. Copy semua foto ke folder tersebut
3. Update path di `index.html` dari URL ke path lokal:
   - Dari: `src="https://images.unsplash.com/..."`
   - Ke: `src="images/portfolio/kitchenset-1.jpg"`

### Opsi 2: Upload ke GitHub
1. Push gambar ke repository GitHub
2. Gunakan GitHub Pages URL:
   - `https://raw.githubusercontent.com/RizkyBimantoro/Cipta-Karya-Alumindo/main/images/logo.png`

### Opsi 3: Hosting Eksternal
- Upload ke Imgur, Cloudinary, atau hosting image lainnya
- Copy URL dan paste di `index.html`

---

## ✅ Checklist

### Logo
- [ ] Logo perusahaan (PNG/SVG)
- [ ] Update di header
- [ ] Update di footer
- [ ] Update favicon

### Foto Tim
- [ ] Foto workshop/tim kerja
- [ ] Update di section Tentang Kami

### Portfolio/Galeri
- [ ] Foto kitchenset (minimal 2)
- [ ] Foto kusen aluminium
- [ ] Foto pintu aluminium
- [ ] Foto jendela aluminium
- [ ] Foto partisi kaca
- [ ] Foto lemari/wardrobe
- [ ] Foto shower screen
- [ ] Foto proyek selesai (3-4 foto)

---

## 📝 Tips Fotografi untuk Website

### Kualitas Gambar:
- **Resolusi**: Minimal 1200x800px
- **Pencahayaan**: Terang dan natural
- **Komposisi**: Bersih, fokus pada produk
- **Format**: JPG untuk web (compress jika > 500KB)

### Yang Harus Difoto:
1. **Before-After** proyek
2. **Close-up** detail finishing
3. **Wide shot** hasil keseluruhan
4. **Multiple angles** dari produk
5. **Tim sedang bekerja** (untuk kredibilitas)

### Edit Foto:
- Brightness & contrast yang baik
- Crop untuk fokus pada subject
- Watermark logo (optional)
- Compress untuk loading cepat

---

## 🚀 Setelah Gambar Siap

Beri tahu saya dan saya akan:
1. Update semua path image di `index.html`
2. Tambahkan alt text yang SEO-friendly
3. Implement lazy loading
4. Optimize untuk responsive design

---

**Status**: ⏳ Menunggu gambar dari klien
**Last Updated**: 6 November 2025
