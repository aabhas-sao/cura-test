# cura-test
- build the docker image from Dockerfile inside cura-docker folder
- ```docker build -t image-name .```
- bind port and run 
- ```docker run -it -p 4000:8080 --name container-name image-name``` 
- inside container run node ./cura-test/server.js
