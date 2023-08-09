# Fastify TODO CRUD API

This is a sample project of a CRUD (Create, Read, Update, Delete) API for managing tasks (TODOs) using the Fastify framework. This API allows you to create, list, update, and delete tasks.

## Requirements

Make sure you have the following technologies installed on your machine:

- Node.js (version 18.16.0)
- NPM (Node.js package manager)

## Installation

1. Clone this repository to your local environment:

```bash
git clone https://github.com/your-username/fastify-todo-crud.git
```

2. Navigate to the project directory:

```bash
git cd todo
```

3. Navigate to the project directory:

```bash
git npm install
```

## Usage

Access the API through the following URL: http://localhost:8080

## Routes

Access the API through the following URL: http://localhost:8080

GET /todos: Returns a list of all tasks.
GET /todos/:id: Returns a specific task based on the provided ID.
POST /todos: Creates a new task. Send the task data in the request body.
PUT /todos/:id: Updates an existing task based on the provided ID. Send the updated data in the request body.
DELETE /todos/:id: Deletes a task based on the provided ID.

## Data Format

All requests and responses use JSON format.

```yaml
{
   "status": "pedent",
   "content": "Sleep"
}
```