# About
Hello world at Spring MVC + React.js

## Branches
In master branch MVC config is xml + Java
In java-config branch MVC config is only java

## Client
For build client: 
1. Move to /client
2. Run `npm install`
2. Run `npm run build` command.
3. Copy all from /client/build folder to /src/main/webapp folder

## Run (after build client)
1. `mvn clean package` from root project folder
2. move to "docker" folder
3. `docker-compose up -d`
4. browse http://{docker-ip}:8080
