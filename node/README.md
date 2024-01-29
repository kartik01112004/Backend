# NODE jS

## Global object

eg: window object of browser
`node global`

we dont need to call global ..we can use its fn without calling it

we use reqire to import an object or a class from another file

we use `modules.exports` for exporting a file to another file

### buffer

a package of data that is sent when we log a file use `.toString()` to make that buffer data readable

## Stream & Buffer

### Stream

Start using data before its fully loaded
eg: watching video on yt -- we dont need to download full video we can start watching as soon as we get some data.

### Buffer

small chunks of data sent in a stream is called buffer

## Client & Server

on client request server sends responce
how does client know what to send to which server.

### IP Address & Domain names

## Creating a server

### Localhost

Localhost is like a domain name and it takes us to a loop back ip adderess that is 127.0.0.1 which makes our computer act as a host

#### Port numbers

Port numbers are like 'doors' into a computer
localhost:3000

#### Request

req object of server holds all the info about the request that was made
`const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});`

#### Responce

It is the responce genersted by the server that is showcased on webpage

### Returning HTML Pages

express package

### Status code

They tell what type of resonce was sent to browser by server

100 range - infromation responce
200 range - success code
300 range - code for redirect
400 range - user or client error code
500 range - server error code

## Redirects

## NPM 3rd party packages

1. nodemon - reloading the server automaticaly
2. Lodash - gives access to many functions

## Express

we are using express for easly going from page topage but writing a get request for each page seems too much can we make a list or someting comprizing of all pages and just run that list in one get request to show pages or something like that

### view engins

help make dynamic html page

#### Ejs

### middleware

logger middleware to log details of every request
authentication check middleware for protected routes
middleware to parse JSON data from requests
return 404 pages

use `next();` to go to next middleware when one doesnt send any request and we want to go to next one

#### static files

## MongoDB Atlas

It is a cloud database that we can connect to and use for our applications without downloaing it on our local system.

we can use mongoose for joining the app and the database

### Mongoose

It is an ODM library - Object Document Mappingg library
we connect them by making schemas and models to communicate between them.

## Types of requests

get
post
delete
put (update data)

## route parameters

part of routes that can change
