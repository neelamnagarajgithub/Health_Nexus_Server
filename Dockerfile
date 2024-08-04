# Use the official Node.js image.
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the app
RUN npm run build

# Run the web service on container startup.
CMD ["npm", "run", "start:prod"]