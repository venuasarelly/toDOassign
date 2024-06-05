# toDOassign
Starting the Server:
Install Dependencies: Ensure you have Node.js and npm installed on your system. If not, download and install them from the official website.

Install Required Packages: Run npm install in the terminal to install the required dependencies listed in your package.json file.

Start the Server: After installing the dependencies, run node yourfile.js in the terminal, where yourfile.js is the name of your main JavaScript file containing the Express application (e.g., node app.js).

Verify Server is Running: Once the server starts, you should see a message in the terminal indicating that the server is running on a specific port (e.g., Server is running on port 3000).

Implemented APIs:
Create Task API:

Endpoint: POST /tasks/add
Description: Allows users to create a new task by sending a POST request to the /tasks/add endpoint with a JSON payload containing the title and description of the task.
Validation: Checks if the title is empty and returns a 400 Bad Request error if so.
Response: Returns the newly created task with a 201 Created status.
Get All Tasks API:

Endpoint: GET /tasks/all
Description: Retrieves a list of all tasks stored in the database by sending a GET request to the /tasks/all endpoint.
Response: Returns an array of tasks as JSON.
Mark Task as Completed API:

Endpoint: PUT /tasks/complete
Description: Allows users to mark a task as completed by sending a PUT request to the /tasks/complete endpoint with the task ID provided as a query parameter.
Validation: Checks if the task is already marked as completed and returns a 400 Bad Request error if so.
Response: Returns the updated task details.
Edit Task API:

Endpoint: PUT /tasks/edit/:id
Description: Allows users to edit the details of a task by sending a PUT request to the /tasks/edit/:id endpoint with the task ID provided as a URL parameter and a JSON payload containing the updated title and description.
Validation: Checks if the title is empty and returns a 400 Bad Request error if so.
Response: Returns the updated task details.
Delete Task API:

Endpoint: DELETE /tasks/:id
Description: Allows users to delete a task by sending a DELETE request to the /tasks/:id endpoint with the task ID provided as a URL parameter.
Response: Returns a message confirming the deletion of the task.
