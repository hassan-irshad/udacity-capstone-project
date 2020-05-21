# Photos Catalogue App

This application will allow creating/removing/fetching photo catalogue items. Each item can have name, description and an attachment image. Each user only has access to catalogue items that he/she has created. 

# Functionality of the application

* The application has serverless backend built using AWS Lambda funtions, dynamodb database and AWS Api Gateway, AWS S3 bucker and AWS Cloudformation
* The client consist of Vuejs framework
* The application uses Auth0 HS256 algorithm to authenticate users and pass jwt token to interact with the backend
* To upload images attachements, the application uses presigned url from s3 bucket and uploads the image through it to the s3 bucket

# How to run the application

## Backend

To deploy an application run the following commands:

```
cd backend
npm install
sls deploy -v
```

## Frontend

To run a client application:

```
cd client
yarn start
