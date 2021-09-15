const express = require('express');
const router = express.Router();
const post = require('../controllers/posts');

router.get('/', function(req, res){
    post.list(req,res);
});

router.post('/', function(req, res) {
    post.create(req,res);
});

module.exports = router;