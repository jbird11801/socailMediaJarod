const router = require('express').Router();
const { User } = require('../../model');
const { Sequelize } = require('sequelize');
const fs = require('fs');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email }
            });

            if (!userData) {
                res
                    .status(400)
                    .json({ message: 'Incorrect information entered email'});
                return;
            }

        const validatePassword = await userData.checkPassword(req.body.password);

        if (!validatePassword) {
            res
                .status(400)
                .json({ message: 'Incorrect information entered pass '});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.name = userData.username;
            res.json({ user: userData, message: 'Logged in successfully! '});
            
        });
        
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.post('/signup', async (req, res) => {
    // Extract text content from the request body

  const newUser = req.body;

  fs.readFile('./seeds/userData.json', 'utf8', async (err, data) => {

    if (err) {

      console.error(err);

  } else {

      // Convert string into JSON object

      const parsedUser = JSON.parse(data);

      // Add a new note

        var user = await User.create({

          username : newUser.username,

          email : newUser.email,

          password : newUser.password,

          animalChoice : newUser.animalChoice
          
        })

      .then(() => {

        parsedUser.push({username : newUser.username, animalChoice : newUser.animalChoice});

        // Write updated reviews back to the file

        fs.writeFile('./seeds/userData.json', JSON.stringify(parsedUser, null, 4),(writeErr) =>

          writeErr

            ? console.error({})

            : console.info('Successfully updated Users!')


      )
        // Post creation successful
        // REDIRECT TO DASHBOARD...?
        res.redirect('/dashboard'); //

      })
      
      .catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Failed to create new user '});      })

    }


});

});

module.exports = router;