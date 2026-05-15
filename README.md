# Anime Finder
LINK YOUTUBE : https://youtu.be/xDLn0O7rMCQ
Website pencarian anime modern berbasis API menggunakan **Vanilla JavaScript**.  
Project ini menampilkan data anime secara realtime menggunakan API publik dari Jikan.

## Preview

Anime Finder adalah website pencarian anime dengan tampilan modern seperti platform streaming.

Fitur utama:
- Search anime realtime
- Menampilkan poster anime
- Rating anime
- Episode
- Tahun rilis
- Status anime
- Sinopsis singkat
- Hero banner dinamis
- Filter kategori
- Modal detail anime
- Responsive design
- Error handling

---

## API yang Digunakan

Menggunakan **Jikan API**  
https://jikan.moe/

Jikan API menyediakan data anime dari MyAnimeList.

---

## Teknologi yang Digunakan

- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API
- Jikan REST API

---

## Struktur Folder

```bash
anime-finder/
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## Cara Menjalankan Project

### 1. Clone repository

```bash
git clone https://github.com/USERNAME/anime-finder.git
```

### 2. Masuk ke folder project

```bash
cd anime-finder
```

### 3. Jalankan di browser

Buka file:

```bash
index.html
```

Atau gunakan **Live Server** di Visual Studio Code.

---

## Cara Menggunakan

1. Ketik nama anime pada kolom pencarian  
2. Klik tombol **Search**  
3. Data anime akan muncul  
4. Klik card anime untuk melihat detail lengkap  
5. Gunakan filter kategori untuk memilih tipe anime

---

## Fitur Clean Code

Project ini menerapkan:

- Pemisahan struktur file
- Pemisahan logic dan UI
- Async/Await
- Error handling
- Modular function

Contoh:

### Fetch Data

```javascript
async function fetchAnime()
```

### Render UI

```javascript
renderAnime()
```

### Error Handling

```javascript
renderError()
```

---

## Screenshot

Tambahkan screenshot project di sini.

Contoh:

```md
![Preview](screenshot.png)
```

---

## Kesesuaian Dengan Persyaratan Tugas

### 1. Sumber Data API
Menggunakan API publik gratis dari Jikan API

### 2. HTTP Client
Menggunakan Fetch API

### 3. Clean Code
Logika dipisahkan antara:
- Fetch data
- Render UI
- Error handling

### 4. Error Handling
Menggunakan:
- Try Catch
- Response checking

### 5. Penyajian Data
Data ditampilkan dalam bentuk:
- Grid cards
- Hero banner
- Detail modal

---

## Author

Muhyidin Muhammad Abdul Latif

---

## License

Free to use for educational purposes.
