export { errorHandler };

function errorHandler(err, res) {
    if (typeof (err) === 'string') {
        // custom application error
        const is404 = err.toLowerCase().endsWith('not found');
        const statusCode = is404 ? 404 : 400;
        return res.status(statusCode).json({status:false, message: err });
    }
    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({status:false, message: 'Invalid Token' });
    }
    // default to 500 server error
    return res.status(500).json({status:false, message: err.message });
}