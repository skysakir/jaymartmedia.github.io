# NPM Packages

This file contains some convenient NPM package commands.

## http-server

[http-server](https://www.npmjs.com/package/http-server) can be used to run a local web server for serving static files

### Serve a SPA where misses return the index. html

`npx http-server ./dist -p 8080 --proxy http://localhost:8080?`
