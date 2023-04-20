# Professional-REAME-Generator
Application that generates a professional README based on a users input

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:|   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |   
| Node.js | [https://nodejs.org/en/docs](https://nodejs.org/en/docs)     |  
| Inquirer | [https://www.npmjs.com/package/inquirer/v/8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)     |       

## Description 
[Walk through demo](https://watch.screencastify.com/v/B6tC5HSeR6gNz0tii2kx)

This application generates a professional README by taking users input by utilizing inquirer.  The users inputs are rendered into a README markdown file following good README practices.  


## Table of Contents 


* [Installation](#installation)
* [code Highlight](#code-highlight)
* [Learning Points](#learning-points)
* [Usage](#usage)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)


## Installation

npm i 

## Code Highlight

Even though this same action could have been executed with a simple if statement, this was my first time working with switch cases and I wanted to try it out.  There is a case for each option that the user has and a coresponding badge points to a url for that badge. Depending on the users choise a different badge url will be passed into the markdown.  
```Js
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
    default:
      return ""

  }
  return `![License badge](${badge})`

```

## Learning Points 
This was my first interaction with Node.js as well as the packages that can be used with it.  It was my first time not having a HTML and CSS doc, and not opening my code in the browser and instead in the Node.js environment.

* Node.js
* inquirer
* fs 
* switch cases 
* ternary operators
* module exports
* functions within template literals

## Usage 

To generate a customizable professional README


![node.js environment](assets/Screenshot%202023-04-20%20164906.png)

## Author Info


### Shea Schwennicke


* [Portfolio](https://sheaschwenn.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/shea-schwennicke-76a378210/)
* [Github](https://github.com/sheaschwenn)



## License

MIT License

For more information please refer to LICENSE in the repo


---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.