/**
 * 
 * For every request made this middleware function will run
 * and print the URL and method to console
 */
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

module.exports = logger;