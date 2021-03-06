
# Automated Attendance Project

Web based Application for automating the process of taking and managing attendance of a meeting.

# Live

https://youtu.be/dei8hoAT0-E

## Requirements

 For development, you will only need Node.js.

### Node

- #### Node installation on Windows


  Just go on official  [Node.js website](https://nodejs.org/en/) and download the installer. Also, be sure to have git available in your PATH, npm might need it (You can find git here).

- ####  Node installation on Linux


  You can install nodejs and npm easily with apt install, just run the following commands.

```bash
 $ sudo apt install nodejs
 $ sudo apt install npm
```
- ####  Other Operating Systems


    You can find more information about the installation on the [official Node.js website](https://nodejs.org/en/) and the [official NPM website](https://www.npmjs.com/).

If the installation was successful, you should be able to run the following command.
   ```bash
 $ node --version
v8.11.3

$ npm --version
6.1.0
``` 
 
  ## Install

    $ git clone https://github.com/glasscodeclub/bot-attendance
    $ npm install
## Configure app

Create a .env file in the root of Directory, with the following variables 

- MONGO_URL=your_mongodb_atlas_link 
- PORT=3000
- gmailUsername=bot_email_id
- password=bot_email_id_password
## Running the project

    node app
    or 
    npm run dev
    
## Screenshots
 ![meetdetails](https://user-images.githubusercontent.com/75481411/151561946-accd42ad-5242-493b-b1bd-19f56846adcf.jpeg)
 ![dashboard](https://user-images.githubusercontent.com/75481411/151561961-7803f783-0158-4ad0-9dbc-35dc229a8676.jpeg)

