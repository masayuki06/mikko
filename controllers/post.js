const Post = require('../models/post');
const getPosts = (req,res)=>{

    res.json({
        posts : [
            {title: 'First Post'},
            {title: 'Second Post'}
        ]
    });


}

const creatPost = (req, res) => {

    const post = new Post(req.body);
    // console.log("CREATING POST", req.body);
    post.save((err, results) => {

        if(err){
            return res.status(400).json({
                error:err
            })
        }
        res.status(200).json({
            post:results
        })

    })    


}

module.exports = {
     getPosts,
     creatPost
}