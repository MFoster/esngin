## Intent
This package is designed to transpile ES6 and JSX code easily.
It uses Docker to take a directory of ES6/JSX and pump it through babel and browserify 
to a new directory where it can be consumed by a web browser.

## Usage

- Use environment variables by modifying the .env file.
- ES_ENGINE_OUTPUT=/directory/web/can/read
- ES_ENGINE_INPUT=/directory/with/source/code

By running `docker-compose up` you will see a file called esngin.app.js.  
This is the raw output of your JS bundled with any 3rd party dependencies, it's going to be large.
Don't pay too much attention to this file.

Source maps are set up to better depict the code and help with debugging.
Load the file into a web browser and test drive it in a sand box scenario.