---
slug: running-llama-ai-model-locally
title: Running Llama AI Model Locally
authors: jaymartin
tags: [AI, Llama, Self hosting, Local]
toc_max_heading_level: 4
---

The [Llama AI model](https://www.llama.com/) is an open-source model built by Meta. It can be used similarly to how OpenAI's ChatGPT can be used. In this article we will run the Llama AI model locally via Docker. We will NOT configure Llama to use the GPU in this article.

<!--truncate-->

## Overview

First we will run an [Ollama](https://ollama.com/) Docker container. Ollama is used as a wrapper around the AI models themselves. Then we will add the llama 3.2 model to the Ollama container. Once the model is running, we will interact with the Llama via HTTP using the cURL command line tool. Additionally I will show you how to add a code AI model and interact with it. Finally we will run a UI to make it easier to interact with the AI models (more similar to the ChatGPT UI. 

### Setup

For this tutorial you will need Docker and cURL (or Postman/Wget or other HTTP client) installed.

You can install Docker by following the [Docker documentation](https://docs.docker.com/get-started/get-docker/).

You can install cURL from the [cURL website](https://curl.se/download.html).

### Running the Ollama container

The [Ollama Docker image](https://hub.docker.com/r/ollama/ollama) is available on the Docker hub.

Start the container by running the following command in your terminal:

```shell
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

If it's your first time, it will likely take a few minutes to pull the image from the Docker hub.

By default, the Ollama wrapper does not have any AI models installed. You can verify this by listing the installed models:
```shell
curl http://localhost:11434/api/tags
```

### Install the Llama 3.2 model

A [list of available models](https://ollama.com/library) can be found on the Ollama website.

There are two ways to install a model. It can be done via an HTTP request or by running a command inside the Docker container,

To install a model via HTTP request (which I prefer) you can run the following cURL command via the terminal.

```shell
curl http://localhost:11434/api/pull -d '{
    "name": "llama3.2"
}'
```

Otherwise you can install the model by executing a command in the Docker in either of two following ways.

```shell
docker exec -it ollama ollama run llama3.2
```
OR
```shell
docker exec -it ollama bash

ollama run llama3.2
```

You can now verify that the model is installed by listing the installed models:
```shell
curl http://localhost:11434/api/tags
```

### Querying the AI model

You can query the model by making an HTTP request

```shell
curl http://localhost:11434/api/generate -d '{
    "model": "llama3.2",
    "prompt": "Tell me a joke about AI models.",
    "stream": false
}'
```

If you would like the response to come back as a stream (for example, to make the response feel faster, or allow partial response, or make it seem like the model is writing the response word by word) then you can exclude the "stream": false property in the request body.

```shell
curl http://localhost:11434/api/generate -d '{
    "model": "llama3.2",
    "prompt": "Tell me a joke about AI models."
}'
```

### Adding and querying a code model (or other model)

You can install a code generation model by running

```shell
curl http://localhost:11434/api/pull -d '{
    "name": "qwen2.5-coder:7b"
}'
```
OR
```shell
`docker exec -it ollama ollama run qwen2.5-coder:7b`
```

Then you can query it by running the following (note the model property):

```shell
curl http://localhost:11434/api/generate -d '{
    "model": "qwen2.5-coder:7b",
    "prompt": "Write me a js function to calculate the fibonacci sequence",
    "stream": false
}'
```

Here is a [list of other available models](https://ollama.com/library) that can be installed.

### Running a UI for easier interaction

Obviously it's a little bit inconvenient to interact with the AI model via HTTP/cURL. It would be nice to have something more similar to the ChatGPT web UI. Fortunately there are a number of [community built integrations](https://github.com/ollama/ollama?tab=readme-ov-file#community-integrations) that can do just that (more or less)! The one we will be using in this article is [Open WebUI](https://github.com/open-webui/open-webui).

Run the following command to run Open WebUI locally

```shell
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main
```

In your browser, go to http://localhost:3000 and you should see the sign in page for Open WebUI. You will need to click "Sign up" to create an account when you first run and use Open WebUI (The tool indicates that the account data will be stored locally, but I have not personally read through the code and verified this).

Once you are logged in, you can create a new chat. You can select the AI model in the dropdown in the top left corner of the chat. It seems that Open WebUI uses the "/api/tags" endpoint to get a list of the installed models.

Once the desired model is selected you can query it via the text box in the middle of the screen!

### Conclusion

In this article I showed how to:
1. Run an Ollama Docker container
2. Install some AI models in the Ollama container (llama3.2 and qwen2.5-coder)
3. Query the different AI models
4. Run Open WebUI to give us an easier interface with the AI models

I hope you found the article helpful!