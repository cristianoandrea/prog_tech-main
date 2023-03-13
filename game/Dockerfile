# Use the latest LTS version of Node.js as the base image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy the application files to the working directory
COPY . /app

# Install dependencies
RUN npm install --legacy-peer-deps

# Build the application
RUN npm run build --prod

# Use the nginx image as the base image for serving the application
FROM nginx

# Copy the built application files to the nginx image
COPY --from=0 /app/dist/game /usr/share/nginx/html

# Expose port 80 for serving the application
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
