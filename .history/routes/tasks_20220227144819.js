const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send('get all tasks')
})

module.exports = router