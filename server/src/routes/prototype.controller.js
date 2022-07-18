/**
 * IMPORTS
 * ********************************
 */
//controller manipulates with model and send response to View = MVC pattern
const model = require('modelPath')

/**
 * CONST
 * ********************************
 */


/**
 * FUNCTIONS
 * ********************************
 */

function httpResponse(req, res){
    res.status(200).json(/*DATA OR RESOURCES*/)
}

/**
 * EXPORT
 * ********************************
 */
module.exports = {
    /*
    FUNCTIONST
    */ 
   httpResponse
}

