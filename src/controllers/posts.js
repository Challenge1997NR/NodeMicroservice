const path = require('path');
const Post = require('../models/posts');

exports.create = function (req, res) {
    const {name} = req.body
    const newPost = new Post({name});
    console.log(req.body);
    newPost.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save shark to database');
        } else {
            res.json({sucess:true})
        }
  });
               };

exports.list = function (req, res) {
        Post.find({}).exec(function (err, posts) {
                if (err) {
                        return res.send(500, err);
                }
                res.json({
                        posts
             });
        });
};