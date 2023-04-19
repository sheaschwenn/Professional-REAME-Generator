//  badges 

const apache = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
const GNU = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
const MIT = 'https://img.shields.io/badge/License-MIT-yellow.svg';
const BSD2 = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apache = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
const GNU = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
const MIT = 'https://img.shields.io/badge/License-MIT-yellow.svg';
const BSD2 = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
  let badge;
  switch (license) {
    case "Apache 2.0 License":
      // not sure 
      badge = apache;
      break;
    case "GNU":
      // not sure 
      badge = GNU
      break;
    case "MIT License":
      // not sure 
      badge = MIT
      break;
    case "BSD2 License":
      // not sure 
      badge = BSD2
      break;
    default:
      return ""

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](${badge})
  ## Description 
  ${data.description}

  ## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing 
${data.contribution}

## Tests
${data.test}

## Questions
Checkout my other repos: [GitHub Profile](https://github.com/${data.username})

Contact me: [email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
