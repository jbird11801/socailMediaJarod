const sequelize = require('../config/connection');
const { User } = require('../model');
const { Post } = require('../model/Posts')
const userData = require('./userData.json');
const postData = require('./postData.json');
const fs = require('fs'); // Might need a writeToFile fs?

const seedDatabase = async () => {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });

        await Post.bulkCreate(postData, {
            individualHooks: true,
            returning: true,
        });

        process.exit(0);
};

seedDatabase();