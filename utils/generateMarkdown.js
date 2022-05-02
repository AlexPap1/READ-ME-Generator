// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
//license

# Title:
## 🖥️ Github URL 🖥️

**https://github.com/${data.username}/ **

## 🖊️ Description 🖊️

${data.description}

## 📜 Table of Contents 📜

[Installations](#installation)
[Usage](*usage)
[Contributors](#contributors)
[Tests](#tests)
[Questions?](#questions)

## ⬇️ Installations ⬇️
## ⚙️ Usage ⚙️
## 🤝 Contributors 🤝
## 👾 Tests 👾
## 🤔 Questions? 🤔



`;
}

module.exports = generateMarkdown;
