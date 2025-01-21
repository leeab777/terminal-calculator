# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /workspace

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Default command to run in the container
CMD ["node"]
