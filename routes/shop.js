const path = require('path');
const express = require('express');
const router = express.Router();
const shopController =require('../controllers/shop')


const baseUrl = "/products";

//Method GET
//URL /
router.get("/", shopController.getIndex);

//Method GET
//URL /products
router.get(baseUrl, shopController.getProducts);

//Method DELETE
//URL /products/delete
router.get(`${baseUrl}/delete`, shopController.getProducts);

//Method GET
//URL /products/:productId
router.get(`${baseUrl}/cart/:productId`, shopController.getProduct);

//Method GET
//URL /cart
router.get(`${baseUrl}/cart`, shopController.getCart);

//Method POST
//URL /cart
router.post(`/cart`, shopController.postCart)

//Method GET
//URL /cart
router.get(`${baseUrl}/orders`, shopController.getOrders);

//Method GET
//URL /checkout
router.get("/checkout", shopController.getCheckout);



module.exports = router;