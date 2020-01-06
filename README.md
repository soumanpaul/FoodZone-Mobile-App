# Food Zone Mobile App

Food Zone is a full-stack mobile application for Restaurant. It uses Expo and React Native and Redux for the front end, Nodejs, Expressjs and Mongodb as the back-end service, and the API service is built with REST API.



## Demo

Live project

Android APK Download [here]()

Client React web App version [here](http://foodzone2020client.herokuapp.com/)
Frontend Repo [here](https://github.com/soumanpaul/ZoodZone-React-frontend)

Backend repo [here](https://github.com/soumanpaul/Fooz-Zone-REST-API)
REST API Documentatioin [here](http://foodzone2020.herokuapp.com/)

Extensive Postman version of API documentation with examples [here](https://documenter.getpostman.com/view/5731747/SWLe6nhT?version=latest)

![image](/assets/images/screen1.gif)


## Features

* Sign in
* Sing up
* Remember user
* Confirm user by SMS or Email link
* Reset password
* Upload Profile picture
* 

## Technologies

* Expo
* React Native
* Reactjs
* Nodejs
* Expressjs
* Mongodb
* Mongoose
* Redux
* React navigation
* Styled components


## Overview

After sign up/sign in, users can perform the following:
* Give access to their mobile device library by pressing the camera icon in the header.
* Upload pictures to the feed.
* Like and unlike pictures (from other users and their own).
* Refresh the feed by pull-to-refresh or by pressing the reload button in the header.
* Flag inappropriate content by pressing the options icon in the image card footer.
* Remove their own pictures from the feed. Also available in the options icon.


## App flow

* Users are authenticated using out of the box AWS Amplify authentication flow.

* Users a redirected to the only screen of the app: the feed.

* When a user uploads a picture:
  * A put request with RNS3 will store the file in an AWS-S3 bucket.
  * An Apollo graphql mutation will store a record in a DynamoDB Picture table.
  
* When a user flags inappropriate content:
  * An AppSync Client graphql mutation will store a record in a DynamoDB Flag table.
  * The front-end will hide that picture from the user's feed.
  
* When a user likes/unlikes a picture:
  * An AppSync Client graphql mutation will create a like instance in a DynamoDB Like table.
  * An AppSync Client graphql mutation will destroy that like instance from the DynamoDB Like table.
  
* When a user deletes a picture:
  * A remove request with the Amplify Storage API will delete the associated file from the AWS-S3 bucket.
  * An Apollo graphql mutation will destroy the record from the DynamoDB Picture table.
  * The feed is refreshed to display the current pictures.
  
* When a user refreshes the feed:
  * An AppSync Client graphql query will request all the current pictures stored in the DynamoDB Picture table.
  
## Prerequisites

To run this app on your local machine, you need the following tools:

* [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)
  * `npm install -g expo-cli`
  
* 

* [Node JS](https://nodejs.org/en/download/) with [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

* 

## Configuring the back-end

1. Clone this repo to your local machine.

```
git clone https://github.com/yhenni1989/plush

cd plush
```

2. Add AWS Amplify dependencies to your project.

```
yarn add aws-amplify aws-amplify-react-native

# or

npm install aws-amplify aws-amplify-react-native
```

3. Initialise the AWS Amplify project.

```
amplify init
```

4. Follow the same instructions as below.

<img width="561" alt="init" src="https://user-images.githubusercontent.com/26605247/54110565-98152e80-43d9-11e9-9eed-e728cbf2ecd6.png">

5. Configure an Amazon Cognito User Pool to store users credentials.

```
amplify add auth

# When prompt, choose: Yes, use the default configuration.
```

6. Add an Amazon S3 bucket to store pictures.

```
amplify add storage

# Choose: Content (Images, audio, video, etc.)
# Give access to only authenticated users.
# Give users read/write acces.
```

