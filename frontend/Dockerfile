# Stage 1: Build the Vite React application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Vite output (dist folder) to Nginx's serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 as requested
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
