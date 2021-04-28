const Post = require('../models/Post')
const TimeAgo = require('javascript-time-ago')
const en = require('javascript-time-ago/locale/en')
TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

module.exports = {
    getPosts: async (req,res)=>{
        try{
            //Do we want to grab all the todos?
            const posts = await Post.find();
            console.log(posts);
            //How can we grab our logged in users left to dos?
            res.render('posts.ejs', {posts});
        }catch(err){
            console.log("error", err)
        }
    },
    createPost: async (req, res)=>{
        try{
            await Post.create({ title: req.body.title, text: req.body.text, date: timeAgo.format(Date.now()) })
            console.log('Post has been added!')
            res.redirect('/post')
        }catch(err){
            console.log(err)
        }
    },
    deletePost: async (req, res)=>{
        console.log(req.body.postIdFromJSFile)
        try{
            await Post.findOneAndDelete({_id:req.body.postIdFromJSFile})
            console.log('Deleted Post')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    updatePost: async (req, res) => {

    },
    addPost: async (req, res) => {
      console.log(req.body);
      res.redirect("/post")
    }
}    