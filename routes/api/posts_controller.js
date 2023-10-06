const express = require('express')
const router = express.Router();
const Posts = require('../../models/user')

//post Api 
router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try {
        const post = await newPost.save();
        if (!post) throw Error('Something went wrong with the post')
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
});


router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        if (!posts) throw Error('No Items');
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ mesg: err })
    }
});



module.exports = router;