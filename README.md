# Freshworks Backend Assignment

## Language and libraries
The program was written in NodeJS using ExpressJS

## Usage
Execute `node index.js`
The server runs on `localhost` (aka `127.0.0.1`) on the port `3000`

## File Structure
The main server file is `index.js` in the root directory

All other routing files are placed in router directory
    The router directory contains three file `router.js`, `create.js`, `read.js`and `delete.js`
    Where `router.js` is the main router file and the other files each have the purpose as per the filename

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
```curl -d '{"key":"a", "value":"1"}' -H "Content-Type: application/json" http://127.0.0.1:3000/create
curl -d '{"key":"b", "value":"2", "ttl": 1}' -H "Content-Type: application/json" http://127.0.0.1:3000/create
curl -d '{"key":"c", "value":"3", "ttl": 180}' -H "Content-Type: application/json" http://127.0.0.1:3000/create
curl -d '{"key":"c"}' -H "Content-Type: application/json" http://127.0.0.1:3000/read
curl -d '{"key":"b", "value":"2", "ttl": 1}' -H "Content-Type: application/json" http://127.0.0.1:3000/create
```
