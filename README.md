# Fastify TODO CRUD API

This is a sample project of a CRUD (Create, Read, Update, Delete) API for managing tasks (TODOs) using the Fastify framework. This API allows you to create, list, update, and delete tasks.

## Requirements

Make sure you have the following technologies installed on your machine:

- Node.js (version 18.16.0)
- NPM (Node.js package manager)

## Installation

1. Clone this repository to your local environment:

```bash
git clone https://github.com/D0nat4ll0/todo
```

2. Navigate to the project directory:

```bash
cd todo
```

3. Navigate to the project directory:

```bash
npm install
```

# Routes

Access the API through the following URL: http://localhost:8080

## List all tasks
Endpoint: GET /todos

This endpoint returns a list of all available tasks.

## Get a specific task
Endpoint: GET /todos/:id

This endpoint returns details of a specific task based on the provided ID.

## Create a new task
Endpoint: POST /todos

This endpoint allows you to create a new task. Send the task data in the request body.

## Update an existing task
Endpoint: PUT /todos/:id

This endpoint allows you to update an existing task based on the provided ID. Send the updated data in the request body.

## Delete a task
Endpoint: DELETE /todos/:id

This endpoint allows you to delete a task based on the provided ID.

Note: Replace :id with the actual task ID when making the requests.

## Data Format

All requests and responses use JSON format.

```yaml
{
   "status": "pedent",
   "content": "Sleep"
}
```