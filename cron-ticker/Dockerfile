# use node alpine image
FROM node:20.11.1-alpine3.19

# cd /app
WORKDIR /app 

# Get the app.js and package.json and paste in the working directory (/app)
COPY app.js package.json ./

RUN npm install ## Setup image

# Once the image is running, the CMD blocks will execute:
CMD [ "npm", "start" ]