const express =require('express');
const voucherRouter = express.Router();
const {getVouncher } = require('../controllers/Vouncher');

voucherRouter.get('/:id',getVouncher);

module.exports = voucherRouter;
