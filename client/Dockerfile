# Base Image
FROM node:14

# Work directory
WORKDIR /client

# Installling App dependencies (Wildcard for both package + lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy over the code
COPY . .

# Port Forward
EXPOSE 3000

# Start the server
CMD npm start