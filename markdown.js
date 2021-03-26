function generateMd(answers) {
    console.log(answers);
    const {title,description,installation,usage,contributions,testInstructions,licenseTypes} = answers;

    const readme = `## Title 
    ${title} 


    ## Description 
    ${description}

    ## Installation
    ${installation}

    ## How to use website features
    ${usage}

    ## Code contribution
    ${contributions}

    ## Tests
    ${testInstructions}

    # License
    ${getLicense(licenseTypes)}
    `
    return readme; 
  }

   function getLicense(license) {
    if(license == 'MIT'){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license == 'GPL'){
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license == 'BSD 3-Clause'){
        return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else {
        return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    }
  }

  module.exports = { generateMd };
