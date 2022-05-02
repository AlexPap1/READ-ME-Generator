// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseSection(license) {}

//function to generate markdown for README
//ADD LICENSE!!
function generateMarkdown(data) {
  return `# ${data.title}

# Title: ${data.repo}

## 🖥️ Github URL 🖥️
<br />

## ${data.username}
## https://github.com/${data.username}/
<br />

## 🖊️ Description 🖊️
<br />

${data.description}
<br />

## 📜 Table of Contents 📜
<br />

* [Installations](#⬇️-installations-⬇️)
* [Usage](#⚙️-usage-⚙️)
* [Contributors](#🤝-contributors-🤝)
* [Tests](#👾-tests-👾)
* [Questions?](#🤔-questions-🤔)
<br />

## ⬇️ Installations ⬇️
<br />

${data.instructions}
<br />

## ⚙️ Usage ⚙️
<br />

${data.usage}
<br />

## 🤝 Contributors 🤝
<br />

${data.contributing}
<br />

## 👾 Tests 👾
<br />

${data.tests}
<br />

## 🤔 Questions 🤔
<br />

* Have any additional questions? Check out my github profile ${data.username} at https://github.com/${data.username}/

* And feel free to ask additional questions by reaching [my email](mailto:${data.email}).
<br />

Made with ❤️ and Thank you for viewing 🤝

`;
}

module.exports = generateMarkdown;
