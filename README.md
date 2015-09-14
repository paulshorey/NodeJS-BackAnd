# NodeJS-BackAnd

NodeJS module to allow use of BackAnd Apis

Very minimal. More coming soon.


# Instructions

npm install

edit security details 

* By creating a ".js" file somewhere on your filesystem, outside of the GIT repository or website root. Contents of this file should be: exports = { backand: { username: '', password: '', appname: '' } };

* Create system variable to link to this file: export APP_CREDENTIALS_FILE="/Volumes/Media/WEB-APP/secret/all.js"

* This variable is used by app.js to find the secret credentials

* Alternatively, temporarily just type the credentials into app.js
