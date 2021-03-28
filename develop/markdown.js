function generateMd(answers, githubDetails) {
    console.log(answers);
    const {title,description,installation,usage,contributions,testInstructions,licenseTypes,username,email} = answers;

    const readme = `
${getLicenseBadge(licenseTypes)}  
  
## Title 
${title} 

## Description 
${description}

## Table of Contents
[Installation](#installation)
[How to use website features](#how-to-use-website-features)
[Code contribution](#code-contribution)
[Tests](#tests)
[License](#license)
[Questions](#questions)

## Installation
${installation}

## How to use website features
${usage}

## Code contribution
${contributions}

## Tests
${testInstructions}

## License
${getLicenseNotice(licenseTypes)}

## Questions
For any questions releated to the project please contact below:
### User Name:  'https://github.com/${username}'
### User Email: ${email}
    `
    return readme; 
  }

   function getLicenseBadge(license) {
    if(license == 'MIT'){
        return '![MIT License](https://img.shields.io/badge/license-MIT-green?raw=true)'; 
    } else if (license == 'GPL'){
        return `![MIT License](https://img.shields.io/badge/license-GPL-green?raw=true)`;
    } else if (license == 'BSD 3-Clause'){
        return `![MIT License](https://img.shields.io/badge/license-BSD-green?raw=true)`;
    } 
  }

  function getLicenseNotice(license){
    if(license == 'MIT'){
        return 'This project is licensed under the MIT license. https://opensource.org/licenses/MIT'; 
    } else if (license == 'GPL'){
        return 'This project is licensed under the GPL license. https://www.gnu.org/licenses/licenses.en.html'; 
    } else if (license == 'BSD 3-Clause'){
        return 'This project is licensed under the BSD 3-Clause license. https://opensource.org/licenses/BSD-3-Clause'; 
    } 
  }

  module.exports = { generateMd };
