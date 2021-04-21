# Simple BookList FullStack
[![Docker Build](https://github.com/Zeppily/BookList/actions/workflows/docker_build.yml/badge.svg?branch=master)](https://github.com/Zeppily/BookList/actions/workflows/docker_build.yml)  
  
 [![Node.js Tests](https://github.com/Zeppily/BookList/actions/workflows/node-tests.yml/badge.svg)](https://github.com/Zeppily/BookList/actions/workflows/node-tests.yml)  
## Running the application (Docker)

(cd in project root folder)  
```
    docker-compose up -d
```
This utilizes example.env for database details & communication between server-database.
Resulting containers: booklist_Client, booklist_Server, Booklist_db.

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
