<p align="center">
  <img src="frontend/public/logo.png" alt="AiDen Logo" width="120" />
</p>

<h1 align="center">AiDen</h1>

<p align="center">
  AI-Powered Learning Assistant dengan pendekatan Context-Aware untuk meningkatkan pemahaman mahasiswa
</p>

<p align="center">
  <a href="https://den-flix.vercel.app](https://aiden-frontend-345077426356.us-central1.run.app/">🌐 Live Demo</a>
</p>

---

## ✨ Overview

**AiDen** adalah platform belajar berbasis AI yang dirancang untuk membantu mahasiswa memahami materi kuliah secara lebih efektif dan personal.

Dengan pendekatan **context-aware**, AiDen memahami dokumen yang kamu upload dan menjawab pertanyaan berdasarkan konteks materi tersebut — seperti punya teman belajar pribadi yang selalu siap 24/7.

> ⚠️ Fitur AI membutuhkan koneksi internet aktif dan menggunakan Gemini API untuk pemrosesan.

---

## 🚀 Features

- 📄 **Document Upload & Analysis** — Upload PDF/dokumen kuliah dan biarkan AI yang analisis
- 🤖 **Context-Aware AI Chat** — Tanya jawab berdasarkan konteks dokumen yang diupload
- 🃏 **Flashcard Generator** — Generate flashcard otomatis dari materi
- ✅ **Interactive Quiz** — Buat quiz dari dokumen untuk uji pemahaman
- 📊 **Smart Summary** — Ringkasan cerdas dari dokumen panjang
- 🌐 **Global AI Assistant** — Assistant umum untuk pertanyaan di luar dokumen
- 📓 **Notes Management** — Buat dan kelola catatan belajar
- 📈 **Learning History** — Riwayat aktivitas belajar kamu
- 🔐 **JWT Authentication** — Sistem login & register yang aman
- ⚡ **Fast & Responsive UI** — React + Tailwind CSS

---

## 🛠️ Tech Stack

| Category        | Technology |
|----------------|-----------|
| Frontend       | React.js (Vite) |
| Styling        | Tailwind CSS |
| Backend        | Node.js + Express.js |
| Database       | MongoDB Atlas |
| AI             | Google Gemini API |
| HTTP Client    | Axios |
| Routing        | React Router |
| Auth           | JWT (JSON Web Token) |
| Deployment     | Google Cloud Run |

---

## 📸 Screenshot

<p align="center">
  <img src="public/uidenflix.png" width="90%" />
</p>

---

## 🔐 Authentication

- Register & Login dengan email/password
- JWT-based authentication
- Protected routes untuk halaman dashboard
- User-specific data handling

---

## 🛠️ Build and Dev

- Clone repository
 ```sh
  git clone https://github.com/yourusername/aiden.git
   ```

- Install dependencies (Backend)
```sh
cd backend
npm install
```

- Install dependencies (Frontend)
```sh
cd frontend
npm install
```

- 🔑 Environment Variables Backend (Create a `.env` file in `/backend`):
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

- 🔑 Environment Variables Frontend (Create a `.env` file in `/frontend`):
```env
VITE_API_URL=http://localhost:5000/api/v1
```

- Run development server (Backend)
```sh
npm run dev
```

- Run development server (Frontend)
```sh
npm run dev
```

---

## 📈 Future Improvements

- 🌙 Dark/Light Mode Toggle
- 🤝 Collaborative Study Room
- 🔗 LMS Integration (Google Classroom, Moodle)
  
---

## 📬 Contact / Feedback
>If you have any feedback, suggestions, or issues:

- 📩 Feel free to reach out via GitHub Issues
- 💬 Or contact me directly

---

<p align="center">Built with ❤️ for #JuaraVibeCoding — Google Cloud x Gemini AI</p>
