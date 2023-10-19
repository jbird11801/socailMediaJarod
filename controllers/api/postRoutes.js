// WIP 
// postRoutes.js

const router = require('express').Router();
const { Post , User} = require('../../model');
const fs = require('fs');
const multer = require('multer');

const Auth = require('../../utils/auth');

// Route for text posts (no image)
router.post('/create-text-post', Auth , async (req, res) => {

  // Extract text content from the request body

  const newPost = req.body;

  fs.readFile('./seeds/postData.json', 'utf8', async (err, data) => {

    if (err) {

      console.error(err);

  } else {

      // Convert string into JSON object

      const parsedPosts = JSON.parse(data);

      // Add a new note

        var post = await Post.create({

          userName : newPost.userName,

          text : newPost.text
          
        })

      .then(() => {

        parsedPosts.push(newPost);

        // Write updated reviews back to the file

        fs.writeFile('./seeds/postData.json', JSON.stringify(parsedPosts, null, 4),(writeErr) =>

          writeErr

            ? console.error(writeErr)

            : console.info('Successfully updated Posts!')


      )
        // Post creation successful
        // REDIRECT TO DASHBOARD...?
        res.redirect('/dashboard'); //

      })
      
      .catch((err) => {
        console.error('Error creating text post:', err);
        res.status(500).send('Error creating text post');
      })

    }

});

});

router.post('/logout', async (req, res) => {
  if (req.session.logged_in) {
      req.session.destroy(() => {
          res.status(204).end();
      })
  } else {
      res.status(404).end();
  }
});

module.exports = router;