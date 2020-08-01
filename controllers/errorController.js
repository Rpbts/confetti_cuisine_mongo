const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.internalServerError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`Internal Error Occurred ${errorCode}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, Our application is taking a nap. `);
};