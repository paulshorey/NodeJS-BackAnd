# NodeJS-BackAnd

NodeJS module to allow use of BackAnd Apis

Very minimal. More coming soon.


# Instructions

1) npm install

2) edit security details 

  * Create a ".js" file somewhere on your filesystem, outside of the GIT repository or website root. Contents of this file should be: exports = { backand: { username: '', password: '', appname: '' } };

  * Create system variable to link to this file. This variable is used by app.js to find the secret credentials Command line: export APP_CREDENTIALS_FILE="/Volumes/Media/WEB-APP/secret/all.js"

  * Alternatively, temporarily just type the credentials into app.js

3) node app.js