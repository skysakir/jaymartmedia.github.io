# Node and NPM

## Node

## NPM

`npm install {packageName} --registry={registryUrl}` install from specific npm registry

`npm install {packageName} --registry=https://registry.npmjs.org` install from npm public registry

## NPX

npx can be used to run npm packages directly without globally installing them

`npm_config_registry=https://registry.npmjs.org npx create-block-app@latest my-block2 --template react` run a command with npx using the public registry

## NVM
NVM (Node Version Manager) is a tool for easily installing and changing versions of node

Windows: https://github.com/coreybutler/nvm-windows

Linux/Mac(?): https://github.com/nvm-sh/nvm

## Disable HTTPS (Dangerous)

These commands can make you vulnerable to man-in-the-middle attacks

`npm set strict-ssl false`

`NODE_TLS_REJECT_UNAUTHORIZED=0 npm install {package}`
