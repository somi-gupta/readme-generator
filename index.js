const inquirer = require('inquirer');
const fs = require('fs');
const axios = require("axios");
const generateFile = require('./develop/markdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide the description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide the step by step instructions on how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instruction on how to use the application.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please provide the credits - tutorials, collaborators, third-party assets.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide intructions to run the tests, if any.',
    },
    {
        type: 'list',
        message: 'Please select the license',
        name: 'licenseTypes',
        choices: ['BSD 3-Clause','MIT', 'GPL'],
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your good email address?"
  },
  ];

inquirer.prompt(questions)
.then ((data) => {
  const githubApi = `https://api.github.com/users/${data.username}`;
  axios.get(githubApi).then(function(githubData) {
    const githubInfo = {
      userName: githubData.data.name,
      userEmail: githubData.data.email
    };

 fs.writeFile("PROMPTREADME.md", generateFile.generateMd(data, githubInfo), function(err) {
        if (err) {
          throw err;
        };
         console.log("New README file created with success!");
      });
    });
});