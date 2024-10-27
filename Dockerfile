# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Create the production image
FROM node:20-alpine AS runner

# Set the working directory
WORKDIR /app

# Install only production dependencies
COPY --from=builder /app/package*.json ./
RUN npm install --production --legacy-peer-deps

# Copy built assets from the builder stage
COPY --from=builder /app/ ./

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]