---
slug: call-chatgpt-from-node-js
title: Call ChatGPT From NodeJS
authors: jaymartin
tags: [AI, OpenAI, ChatGPT, NodeJS]
toc_max_heading_level: 4
---

In this article I show you how to call the ChatGPT/OpenAI AI model from inside NodeJS.

This could be useful if you want to build a website or CLI tool that takes advantage of an AI model.

<!--truncate-->

## Overview

We'll start out by setting up a new NPM project. Then we'll add the OpenAI library to our project and copy some code from their quickstart guide (https://platform.openai.com/). And finally we'll create an OpenAI account, create an API key, and buy some credits so we can use the API. I will say upfront, unfortunately we will need to buy at least $5 worth of credits to use the API. The nice thing is, those credits should last for many thousands of API calls (https://openai.com/api/pricing/).

## Create a new NPM project

You will need to have Node and NPM installed in order to complete this step.

I recommend using NVM or FNM to manage Node and NPM
- NVM (Linux/Unix): https://github.com/nvm-sh/nvm
- NVM (Windows): https://github.com/coreybutler/nvm-windows
- FNM: https://github.com/Schniz/fnm

Once you have Node/NPM installed, make a new directory where you would like to put your code:
```shell
mkdir openapi-example
cd openapi-example
```

Then create the NPM project
```shell
npm init -y
```

## Setup Node script

You can refer to the OpenAPI quickstart guide for the latest instructions, or follow the steps below: https://platform.openai.com/docs/quickstart

Add the openapi library:
```shell
npm install openai
```

Create the script in a file called main.js:
```js title="main.js"
import OpenAI from "openai";

const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});

console.log(completion.choices[0].message);
```

Add a start script to the package.json file.
```json title="package.json"
...
    scripts: {
        "start": "node main.js"
    },
...
```

Now run the script by running:
```shell
npm run start
```

TODO: You should see an error mentioning no token set. We'll do that in the next step.

## Create OpenAI account, purchase credits, and create API key

Now we need to create an account, purchase some credits, and get an API key in order to authenticate with the OpenAI API.

To do this:
1. Create an OpenAI account at TODO
2. Click on the "purchase credits" button TODO
3. You will need to purchase $5 or more credits. Unfortunately OpenAI no longer offers free promotional credits. You can view pricing info for API calls here: https://openai.com/api/pricing/
4. Click the "Create API key" TODO
5. Create an web app API key TODO
6. Copy the API key and paste it into a ".env" file (yes, the filename should start with a period/full-stop)
    ```txt title=".env"
    OPENAI_API_KEY=your_api_key_here
    ```

## Use the API key in the Node script

Add the dotenv package to load the ".env" file values as environment variables (you could also add as a system environment variable):
```shell
npm install dotenv
```

Import dotenv and call the config method in the "main.js" file:
```js {2,4} title="main.js"
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI();
...
```

Now run the script by running:
```shell
npm run start
```

The script should now succeed and display the response from ChatGPT. If tbe script returns with an error then you can refer to the [common issues](#common-issues) section.

## Changing the model and adjusting the prompt

You likely want the model to do something other than generating a haiku about recursion. You can do this by changing the prompts that are passed to the model. The [system message](https://platform.openai.com/docs/guides/text-generation#system-messages) is typically set by the developer who is building the application. The [user message](https://platform.openai.com/docs/guides/text-generation#user-messages) is typically passed from the user of the application. You can read more about prompt engineering best practices in the [prompt engineering section of the](https://platform.openai.com/docs/guides/prompt-engineering) OpenAI documentation.

You may also want to change the AI model that is being used. You can do this by changing the model field. Available models can be found in the [models section of the](https://platform.openai.com/docs/models) OpenAI documentation.

```js
const userPrompt = "programming"; // Could be populated from cli arguments, HTTP request body, or other user input
const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini", // Change the model (changes performance and pricing): https://platform.openai.com/docs/models
    messages: [
        { role: "system", content: "You are a helpful joke maker who tells people jokes. Generate me a joke about the following topic" }, // System prompt
        {
            role: "user",
            content: userPrompt, // Prompt that comes from the end user
        },
    ],
});
```

## Conclusion

In this article we created an NPM project and Node script which uses the OpenAI library to interact with the ChatGPT AI model. We also created an OpenAI account and API key to authenticate with the API. Finally we ran a simple script which makes a call to ChatGPT via the OpenAI library and returns a response to the console.

## Common issues

### Token Not found

If you don't have a token, or your token is set incorrectly, you may see an error similar to this one:

```shell
TODO
```

If you see this message then you will need to [generate a token, set it in your ".env" file](#create-openai-account-purchase-credits-and-create-api-key) and [use the token in your script](#use-the-api-key-in-the-node-script).

Things to check:
- Ensure that the ".env" file is named correctly and placed next to the package.json file
- Ensure that the ".env" file contains the variable name and token value `OPENAI_API_KEY=abc123def456`
- Ensure that the lines `import dotenv from "dotenv"` and `dotenv.config()` are in your "main.js" file. The `dotenv.config()` file needs to be BEFORE the `const openai = new OpenAI()` line.

### No funds
If you run an API call before purchasing credits you may see an error similar to this one:

```shell
TODO
```

If you see this message then you will need to [purchase some credits](#create-openai-account-purchase-credits-and-create-api-key). You may also need to generate a new API token and set it in your ".env" file after purchasing tokens. Per my testing, tokens created BEFORE credits are purchased do NOT work even after credits have been purchased.