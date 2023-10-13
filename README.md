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
