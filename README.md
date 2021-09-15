# NodeMicroservice [![Build Status](https://app.travis-ci.com/Challenge1997NR/NodeMicroservice.svg?branch=main)](https://app.travis-ci.com/Challenge1997NR/NodeMicroservice)
Node.js Microservice for NovoResume Challenge
Production app in: http://ec2-35-169-2-163.compute-1.amazonaws.com
## How to run the app:

First, make sure you have [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed

### 1. Build the images

```
docker-compose build
```

### 1.5 Add the .env and .env.db files to your local:

Example .env:

```
MONGO_USERNAME=challengenr
MONGO_PASSWORD=secretpassword
MONGO_PORT=27017
MONGO_DB=postsapp
```

Example .env.db:

```
MONGO_INITDB_ROOT_USERNAME=challengenr
MONGO_INITDB_ROOT_PASSWORD=secretpassword
```

#### Note: Make sure that the usernames are the same

### 2. Run 
```
docker-compose up
```

### 3. If you go to localhost:80 you should be able to see your app.

## Routes:

-  List of Posts: GET `\posts`
- Create Post : POST `\posts`
  -  Body: `{"name":"Name of post"}`

## Pipeline:

### TravisCI
- TravisCI is configured for CI. You can go to the public [link](https://app.travis-ci.com/github/Challenge1997NR/NodeMicroservice/)
- It runs tests (currently only returning a sucess value) and pushes the image to the public Docker Hub https://hub.docker.com/r/challenge1997nr/node_microservice/
- See `.travis.yml` for more details

### AWS
- CodeDeploy is used for the deployment and updating the instance in AWS. Configuration is in `appspec.yml` and `codedeploy/*`
- CodePipeline is connected to the branch "main" so that on every source code change, it will copy the artefacts and pass them along to CodeDeploy.
![imagen](https://user-images.githubusercontent.com/90696506/133458754-7513cdeb-7612-4376-980e-59580532165d.png)

- There is one EC2 instance that is running and will be updated using the scripts in codedeploy/*
