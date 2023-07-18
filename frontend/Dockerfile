# Stage 1: Build the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Create a lightweight production image
FROM nginx:alpine

# Copy the build files from the previous stage to the NGINX server's default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port your NGINX server listens on (default is 80)
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]
