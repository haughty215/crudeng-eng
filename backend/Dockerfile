# Use Node.js LTS version
FROM node:18

# Create and set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port and start app
EXPOSE 5000
CMD ["node", "src/server.js"]
