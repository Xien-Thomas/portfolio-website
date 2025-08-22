# Use the latest LTS version of Node.js
FROM node:22.18-alpine AS builder
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY /react/package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of your application files
COPY . .

# Define the command to run your app
RUN npm run build --prefix react

# PRODUCTION
FROM nginx:stable-alpine AS production
WORKDIR /app
COPY --from=builder /app/react/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]