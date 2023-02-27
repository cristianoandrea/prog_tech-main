# Base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy the source code
COPY . .

# Install dependencies for backoffice
WORKDIR /app
RUN npm install

# Expose port
EXPOSE 4020

# Start the server
CMD ["node", "server.js"]