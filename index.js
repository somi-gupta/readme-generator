const inquirer = require('inquirer');
const fs = require('fs');
const generateFile = require('./markdown');
console.log(generateFile);

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
      message: 'Please provide the step by step instructions on how to get the development environment running..',
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
        type: 'checkbox',
        message: 'Please select the license',
        name: 'licenseTypes',
        choices: ['BSD 3-Clause','BSD 2-Clause','MIT', 'GPL'],
      },
  ]
  
//   ).then((data) => {
//     console.log(data);
//     fs.writeFile('README.md', generate(data), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   })

inquirer.prompt(questions)
.then ((data) => {
 fs.writeFile("README.md", generateFile.generateMd(data), function(err) {
        if (err) {
          throw err;
        };

        console.log("New README file created with success!");
      });
});