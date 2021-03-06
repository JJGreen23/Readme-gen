// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `## ${data.Title}

  
## Description
${data.Description}

## Table of Contents
*[Description](#description)
*[Installs](#installs)
*[Usage](#usage)
*[Contributors](#contributors)
*[Tests](#tests)
*[License](#license)

## Installs
${data.Installs}

## Usage
${data.Usage}

## Contributors
${data.Contributions}

## Tests
${data.Tests}

## License
${data.License}

## Contact Information

Github: https://github.com/${data.Username}

Email:[${data.Email}]

`
}

module.exports = generateMarkdown;
