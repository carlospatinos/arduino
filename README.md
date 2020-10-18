# Arduino interaction with different languages
This project is to test how multiple languages support arduino integration.
Languages such as nodejs, python, etc are popular in the market so I want to test how solid is the support to Arduino.

## Results
In some of the cases I faced certain issues with specific libraries, not necesarily dependent on the language but more related to the library implementation.

## Screenshot
<img src="doc/dashboard.png?raw=true" width="600" />

## Set-up

Use the package manager [npm](https://docs.npmjs.com/cli/install) to install this project.
This project requires mongodb to work so either you have a local mongodb or you can use a cloud hosted one. You can use the template.env as a base, generate the .env file inside the fullAppTest directory and provide a valid url. 
Go into the fullAppTest directory and run the following commands, this will start the server application to expose APIs that will be used to store data in mongo and plot the data on graphs.

### To clone first

```bash
git clone project
```

### To install dependencies

```bash
npm install
```

Then create a .env file in the root of the project similar to the template.env (providing a valid mongo URL).

### To run
```bash
npm start
```
Then go to http://localhost:3000/

Then after this you can execute the arduinoInformationProcessor.py, your arduino board should be up and running to get data from the sensors and the push them using post verb into the web app.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
