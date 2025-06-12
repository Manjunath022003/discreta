# Use node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy frontend files from host src/ into container
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
