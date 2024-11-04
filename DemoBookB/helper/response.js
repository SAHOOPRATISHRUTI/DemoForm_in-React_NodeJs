

const failResponse = (req, res, data, message, statusCode) => {
    return res.status(statusCode).send({
        error: true,
        success: false,
        message: message,
        data: data || null,  
    });
};


const successResponse = (req, res, data, message, statusCode = 200) => {
    return res.status(statusCode).send({
        error: false,
        success: true,
        message: message,
        data: data || null,
    });
};

const errorResponse = (req, res, errorDesc, errorKey) => {
    const statusCode = errorKey || 500; 
    return res.status(statusCode).send({
        error: true,
        success: false,
        message: errorDesc.message || 'An unexpected error occurred.',
        data: null,
    });
};

module.exports = {
    failResponse,
    successResponse,
    errorResponse,
};
