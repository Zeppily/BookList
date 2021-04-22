# Simple BookList FullStack
[![Docker Build](https://github.com/Zeppily/BookList/actions/workflows/docker_build.yml/badge.svg?branch=master)](https://github.com/Zeppily/BookList/actions/workflows/docker_build.yml)  
  
 [![Node.js Tests](https://github.com/Zeppily/BookList/actions/workflows/node-tests.yml/badge.svg)](https://github.com/Zeppily/BookList/actions/workflows/node-tests.yml)  

  
[![React Tests](https://github.com/Zeppily/BookList/actions/workflows/reactapp.yml/badge.svg)](https://github.com/Zeppily/BookList/actions/workflows/reactapp.yml)  
## Running the application (Docker)  
1. Clone Repo  
```
git clone https://github.com/Zeppily/BookList.git
```
2. Go to project root folder
```
cd BookList/
```
3. Run Docker Compose
```
docker-compose up -d
```  
4. Go to your browser localhost:3000  
  
This utilizes example.env for database details & communication between server-database within docker network.  
Resulting containers: booklist_Client, booklist_Server, Booklist_db.  
(* Docker compose: https://docs.docker.com/compose/install/)  
(if you are running the stack remotely, edit client fetch urls to reflect your server address and port)  
(if you want database data to persist after bringing down an image, consider using a named volume for the DB,  
https://docs.docker.com/storage/volumes/#use-a-volume-with-docker-compose)  
## Testing (through github actions for automation)

- Docker build: tests docker compose and verifies containers as running.
- node.js tests: Mocha/Chai API end points testing.

## Restful API Roadmap

| Feature              | Endpoint                   | Status          |
|----------------------|----------------------------|-----------------|
| Retrieve Books       | GET /api/books             | :white_check_mark: |
| Post Book            | POST /api/books            | :white_check_mark: |
| Edit Book            | PUT /api/books/:id         | :white_check_mark: |
| Delete Book          | DELETE /api/books/:id      | :white_check_mark: |
