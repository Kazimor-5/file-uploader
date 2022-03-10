const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  createProduct,
} = require('../controllers/product-controller');
const uploadProductImage = require('../controllers/upload-controller');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
