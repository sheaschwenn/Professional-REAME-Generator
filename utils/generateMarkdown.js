

// switch statement saying if the user picks any of these licenses then use this url to render badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const apache = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  const GNU = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  const MIT = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  const BSD2 = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
  let badge;
  switch (license) {
    case "Apache 2.0 License":
      badge = apache;
      break;
    case "GNU":
      badge = GNU
      break;
    case "MIT License":
      badge = MIT
      break;
    case "BSD2 License":
      badge = BSD2
      break;
    // if "none" is chosen then return an empty string for url
    default:
      return ""

  }
  // if a license was chosen then return that badge url to render a badge on the page
  return `![License badge](${badge})`
}

// if license is not none then we get a link for the table of contents for a license 
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return ''
  }
  return `* [License](#license)`
}


// if a license is chosen then a license section is rendered in the readme with the license that the user chose
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ''
  }
  return `## License
  ${license}
  For more information please refer to LICENSE in the repo`
}

// function to generate the markdown with dynamically created variables based on the users input
// calls license functions to also dynamically generate functions
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}

  ## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}



## Contributing 
${data.contribution}

## Tests
${data.test}

${renderLicenseSection(data.license)}

## Questions
Checkout my other repos: [${data.username}](https://github.com/${data.username})

Contact me with any questions at [${data.email}](mailto:${data.email})
`;
}

// exports the generate markdown function so that it is accessable in other js files
module.exports = generateMarkdown;

