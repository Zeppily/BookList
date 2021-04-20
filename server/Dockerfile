# Base Image
FROM node:14

# Work directory
WORKDIR /server

# Installling App dependencies (Wildcard for both package + lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy over the code
COPY . .

# knex cli
RUN npm install knex -g

# Port Forward
EXPOSE 8000

# Start the server
CMD npm start