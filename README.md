# Bank of Flatiron

## Description
For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

## Instructions
Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

## Requirements
For this project, you must:

- Have a well-written README file.
- Fetch data from a local server running JSON DB server.
- Project Setup & Pre-requisite Data
- In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
- Run this command to get the backend started:
json-server --watch db.json

Test your server by visiting this route in the browser:
http://localhost:8001/transactions

## Project Setup
Once you have the plan in place for the application you want to build take the following steps:

- Create a new project folder
- Create a new GitHub repository (NB: ENSURE IT IS PRIVATE).
- Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
- Please make sure you regularly commit to the repository.
- If you are unfamiliar with HTML tables, take a look at the docs with an example hereLinks to an external site.

## Endpoints
The base URL for your backend is: http://localhost:8001

## Core Deliverables
As a user, I should be able to:

1. See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
Endpoints for Core Deliverables
GET /transactions
Example Response:

[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
POST /transactions
Required Headers:

{
  "Content-Type": "application/json"
}
Request Object:

{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:

{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
## Advanced Deliverables
These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

1. As a user, I should be able to:

Sort transactions alphabetically by category or description.
Delete a transaction which will remove it from the table and delete it from the backend.

## Endpoints for Advanced Deliverables
1. DELETE /transactions/:id
Example Response:

{}


## Author
Purity Jepkorir

## Technologies Used
- HTML
- CSS
- Javascript
- JSON

## License
This project uses the MIT License
