# Fullstack Ecommerce App

A MERN stack e-commerce project that allows users to browse, add to cart, and purchase products online. It incorporates features like user authentication, a shopping cart, and payment processing using Stripe. Redux is used for efficient state management, while JWT ensures secure user authentication.

## Technologies Used

- Node.js
- Express.js
- React
- MongoDB

## Installation

1. Clone this repository using:
```shell
    git clone https://github.com/melvintivane/fullstack-ecommerce-app.git
```    
2. Install server dependencies (backend)
```shell
    cd api
    npm install
```

3. Install client dependencies (frontend)
```shell
    cd client
    npm install
```

## Configuration

1. In the api folder, set your .env environment variables
```shell
    MONGO_URL = your_mongodb_uri
    CRYPTOJS_SECRET = set_up_super_strong_secret_key 
    JWT_SECRET = set_up_super_strong_secret_key
```

2. In the client folder, set your .env environment variables
```shell
    REACT_APP_API_TOKEN = your_api_token
    REACT_APP_API_URL = http://localhost:1337/api or your_api_url
    STRIPE_KEY = your_secret_key
```

## Execution

1. Start the server
```shell
    cd api
    npm start
```

2. Start the client
```shell
    cd client
    npm run dev
```

## Usage

## Database

### User Collection

The User schema represents users registered in the system. Data is stored as follows:

- name: A string representing the user's name (required).
- lastname: A string representing the user's last name (required).
- username: A string representing the unique (required and unique) username.
- email: A string representing the user's email address (required and unique).
- password: A string representing the user's password (required).
- isAdmin: A boolean indicating whether the user is an administrator (default: false).

Product Collection

The Product schema represents the products available in the store. Data is stored as follows:

- title: A string that represents the product title (required and unique).
- description: A string that describes the product (required).
- image1: A string containing the path to the first image of the product (required).
- image2: A string containing the path to the second product image (required).
- type: A string describing the type of product (required).
- categories: An array of strings containing categories associated with the product.
- tags: An array of strings containing tags associated with the product.
- size: An array of strings containing available sizes for the product (required).
- color: An array of strings containing colors available for the product (required).
- oldPrice: A number that represents the old price of the product (required).
- price: A number that represents the current price of the product (required).
- inStock: A boolean indicating whether the product is in stock (default: true).
- is_New: A boolean indicating whether the product is new (default: false).
- quantity: A number that represents the quantity available in stock (required).

### Card Collection

The Cart schema represents a user's shopping cart. Data is stored as follows:

- userId: A string that represents the ID of the user who owns the cart (required).
- product: An array of objects that contains information about the products in the cart.
- productId: A string representing the ID of the product in the cart.
- quantity: A number that indicates the quantity of this product in the cart (default: 1).

### Order Collection

The Order schema represents orders placed by users. Data is stored as follows:

- userId: A string that represents the ID of the user who made the request (required).
- product: An array of objects that contains information about the products in the order.
- productId: A string representing the ID of the product in the order.
- quantity: A number that indicates the quantity of this product in the order (default: 1).
- price: A number that represents the price of the product at the time of ordering.
- amount: A number that represents the total value of the order (required).
- address: An object that contains information about the delivery address (required).
- status: A string indicating the status of the order (default: "pending").
