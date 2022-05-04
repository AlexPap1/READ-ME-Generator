//if license is none, empty string, if not, returns sheilds link for given license
function licenseBadge(license) {
  if (license == "N/A") {
    return ''
  }
  return `![license](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {}

// If license is N/A, empty string for License section. If a value is selected, it will create a section. 
function licenseSection(license) {
  if (license == "N/A") {
    return ''
  }
  return (
    `## License 👮
    <br />
    
    The following Repo has been rated ${license} by the MPAA, Inc.`
  )
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${licenseBadge(data.license)}

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
