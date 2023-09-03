// Create web server with Express
// Create a POST route to handle incoming comments
// Create a GET route to return all comments
// Create a DELETE route to delete a comment

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// GET /comments
router.get('/comments', (req, res, next) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => {
            next(err);
        });
});

// POST /comments
router.post('/comments', (req, res, next) => {
    const comment = new Comment(req.body);
    comment.save()
        .then((comment) => {
            res.json(comment);
        })
        .catch((err) => {
            next(err);
        });
});

// DELETE /comments/:id
router.delete('/comments/:id', (req, res, next) => {
    Comment.findByIdAndRemove(req.params.id)
        .then((comment) => {
            res.json(comment);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;