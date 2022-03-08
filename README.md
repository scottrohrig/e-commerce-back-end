# E-Commerce Back End

## Description
An e-commerce back-end API built with MySQL and Express.js. The database has tables for categories, products and tags, then joins products and tags through an intermediate table.

[![preview](./assets/demo.gif)]()



## Installation

Clone the repository

    git clone git@github.com:scottrohrig/employee-tracker.git

Install the necessary dependencies

    npm i

## Usage

First you must create the database.

Run the MySQL Shell from the terminal. Then type in your MySQL root password.

    mysql -u root -p

After loggin into the shell, source the database.

    source db/schema.sql

Create a .env file in the root directory of the repository

    touch .env

Add the following environmental variables to the .env file and change your user and PW to your MySQL user and password

    DB_NAME='ecommerce_db'
    DB_USER='root'
    DB_PW='password1234'

Save the .env file and run the seed command

    npm run seed

Now you are ready to start the server

    npm start

## Insomnia Routes

To test the routes using insomnia, create folders for categories, products and tags.

![route-folders](./assets/route-folders.png)

### Categories

![categories](./assets/category-routes.png)

Make the insomnia routes for Categories

<details>

<summary>click to view insomnia routes</summary>

GET route for all categores

    localhost:3001/api/categories

GET route for category by id

    localhost:3001/api/categories/:id

POST route to create a new category

    localhost:3001/api/categories

Then add the body

      {
          "category_name": "pants"
      }

PUT route to update a category name

    localhost:3001/api/categories/:id

Then add the body

      {
          "category_name": "leggings"
      }

DELETE route to remove category by id

    localhost:3001/api/categories/:id

</details>

### Products

Make the insomnia routes for Products

<details>

<summary>click to view insomnia routes</summary>

GET route for all products

    localhost:3001/api/products

GET route for category by id

    localhost:3001/api/products/:id

POST route to create a new category

    localhost:3001/api/products

Then add the body

      {
          "category_name": "pants"
      }

PUT route to update a category name

    localhost:3001/api/products/:id

Then add the body

      {
          "category_name": "leggings"
      }

DELETE route to remove category by id

    localhost:3001/api/products/:id


</details>
