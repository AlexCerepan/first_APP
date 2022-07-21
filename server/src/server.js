
/**
 * IMPORTS
 * ****************
 */
//allows to handle http separate from routes
const http = require('http');

const app = require('./app');

/**
 * CONST
 * ****************
 */
//now you can run script node start with cmarg PORT=x
//when you don't run node start with PORT=x then PORT=8000
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

/**
 * METHODS
 * ****************
 */
//starts server
 server.listen(PORT, () => {
        console.log(`server listening on ${PORT}`);
 })  

//way how to load data before the server starts
/*async function startServer() {
    
    await loadPlanetsData()

    server.listen(PORT, () => {
        console.log(`server listening on ${PORT}`);
    })  
}*/








