# LAB - Class 16

## Project: AWS Cloud Server

### Author: Donna Ada

### Problem Domain

AWS Server Deployment from GUI And CLI

### Links and Resources

- [Server Deployed Using Elastic Beanstalk GUI](http://aws-server-gui-env.eba-gpwpewyt.us-west-2.elasticbeanstalk.com/) 

- [Server Deployed Using Elistic Beanstalk CLI](http://aws-server-cli-dev.us-west-2.elasticbeanstalk.com) (currently giving 502 error status)

### Setup

#### `.env` requirements

Create `.env` file with PORT number of your choice 
  - `PORT=<PORT_NUMBER>`

#### How to initialize/run your application

- `npm init -y`
- `npm install express dotenv cors`
- create `.env` file with PORT number of your choice

#### Routes

- GET : `/` - Proof of Life Route
- GET : `/greeting` - greeting route that take in optional query `?name=your_name`

#### Tests

- Proof of Life Test using `app.get()`.

#### UML

n/a