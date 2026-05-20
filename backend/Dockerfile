# Gunakan image resmi Node.js (versi alpine untuk ukuran image yang lebih kecil)
FROM node:20-alpine

# Tentukan direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json (jika ada) ke dalam direktori kerja
COPY package*.json ./

# Install hanya dependensi production
RUN npm install --omit=dev

# Salin seluruh source code backend ke dalam direktori kerja
COPY . .

# Google Cloud Run secara dinamis menyuntikkan environment variable PORT.
# Namun sebagai dokumentasi (dan default untuk local testing), kita mengekspos port 5000.
EXPOSE 5000

# Jalankan server menggunakan script "start" dari package.json
CMD [ "npm", "start" ]
