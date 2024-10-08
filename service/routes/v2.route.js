const express = require('express');
const v2 = require('../services/v2');
const router = new express.Router();
 
router.get('/recommendations', async (req, res, next) => {
  let options = { 
    "xMockResponseCode": req.header("xMockResponseCode"),
    "aiFeatures": req.query.aiFeatures,
    "customerId": req.query.customerId,
    "limit": req.query.limit,
  };


  try {
    const result = await v2.getProductRecommendations1(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;