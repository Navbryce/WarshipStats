const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('You have attempted to access the ships backend. Return to main page.');
});

module.exports = router;
