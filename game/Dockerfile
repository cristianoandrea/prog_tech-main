# Base image
FROM node:14-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build --prod

# Create a new stage with a smaller image
FROM nginx:alpine

# Copy the built application files to the nginx directory
COPY --from=build /app/dist/game /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
