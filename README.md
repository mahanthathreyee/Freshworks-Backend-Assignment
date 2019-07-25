# Freshworks Backend Assignment
This is my submission to the backend assignment for Freshworks hiring

## Language and libraries
The program was written in NodeJS using ExpressJS

## Usage
Execute `node index.js`
The server runs on `localhost` (aka `127.0.0.1`) on the port `3000`

## Environement
The program should work in **any operating** system with `Node v4` and `ExpressJS v14.6.0`

The program was tested on `Manjaro XFCE edition` based on `Arch Linux` using `linux kernel v4.19.59-1`

## File Structure
The main server file is `index.js` in the root directory

All other routing files are placed in router directory

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The router directory contains three file `router.js`, `create.js`, `read.js`and `delete.js`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Where `router.js` is the main router file and the other files each have the purpose as per their filenames

The data store is created in root path as `data.json` automatically

## POST data format
The data must in JSON format
```
{
    "key": {key}
    "value": {value}
    {"TTL"}: {TTL}  //Should be an integer in seconds 
} 
```

## Sample Test Case
The following bash commands can be executed in a linux/unix terminal or windows curl can be downloaded at https://curl.haxx.se/windows/
```
curl -d '{"key":"a", "value":"1"}' -H "Content-Type: application/json" http://127.0.0.1:3000/create
curl -d '{"key":"b", "value":"2", "ttl": 1}' -H "Content-Type: application/json" http://127.0.0.1:3000/create
curl -d '{"key":"c", "value":"3", "ttl": 180}' -H "Content-Type: application/json" http://127.0.0.1:3000/create
curl -d '{"key":"a"}' -H "Content-Type: application/json" http://127.0.0.1:3000/read
curl -d '{"key":"b"}' -H "Content-Type: application/json" http://127.0.0.1:3000/read
curl -d '{"key":"c"}' -H "Content-Type: application/json" http://127.0.0.1:3000/read
curl -d '{"key":"b", "value":"2", "ttl": 5}' -H "Content-Type: application/json" http://127.0.0.1:3000/create
curl -d '{"key":"c"}' -H "Content-Type: application/json" http://127.0.0.1:3000/delete
curl -d '{"key":"b"}' -H "Content-Type: application/json" http://127.0.0.1:3000/delete
```

## Repository Branches
* `master` contains the most stable version of the program files
* `develop` contains the files with the most recent changes is mostly unstable

**Current status of branch `master` is ahead of `develop`**

**View the commits for the changes made during the development process.**

**The development of this assignment started at approx. `8PM IST` on `24th July 2019`**