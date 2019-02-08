# Word frequency calculator
The program returns the top N most frequently occurring words in the file hosted at http://terriblytinytales.com/test.txt

#

## Installation & Instructions (Ubuntu)

* Download NodeJs from https://nodejs.org
* Install latest vesrion of NPM 
```
sudo apt-get install npm
```
* For Database, download mongoDB from https://www.mongodb.com/download-center

## Run Program

* Clone the repository from GitHub.
* Go to the repo folder through Terminal.
* Run the following commands to install dependencies and run the program
```
npm install
npm start
```
* App will run on localhost machine with 8000 port at http://localhost:8000.

## Libraries/Modules used

* Express : Node's framework, makes it easier to use.
* Body Parser : To parse the data from HTML Form
* Request : To send a request to http://terriblytinytales.com/test.txt
* Mocha : Testing framework for Nodejs
* Chai : Assertion library for tests

## Functions (in function.js)

### Frequency

This function takes an array of words as a parameter and returns an array with the even indexes containing the words and the immediately next odd indexes containing their frequencies.

```
frequency(arr); //where arr is the array of words
```

### Convert

This function takes a data string and an integer N and returns the top N most frequently occurring words in the string.

```
convert(data, N); //where data is the data string and N is the integer.
```

The function is explained more with inline comments in the code.

## Tests (in test.js)

Tests are run on a sample string and array that is defined in the file test.js itself. To run the tests, use the following command.

```
npm test
```

All the tests are self-explanatory and run perfectly. Below is a screenshot attached.

![Test Screenshot](https://github.com/nama-codes/ttt/blob/master/screenshot.png)

### Thanks, for any help please email me at namangoyal.official@gmail.com ###
