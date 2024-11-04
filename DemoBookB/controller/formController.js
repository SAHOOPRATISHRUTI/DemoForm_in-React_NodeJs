

const formService = require('../services/formService');
const Responses = require('../helper/response');
const messages = require('../contstants/message');
const { validateFormData } = require('../validator/formValidation');

const handleFormSubmit = async (req, res) => {
    try {
        const formData = req.body;

        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length > 0) {
            return Responses.failResponse(req, res, validationErrors, messages.validationError, 400);
        }

        const result = await formService.saveFormdata(formData);
        return Responses.successResponse(req, res, result, messages.formSubmitted, 200);
    } catch (error) {
        console.error(error);
        return Responses.errorResponse(req, res, {
            message: error.message || 'Failed to process the request.',
        });
    }
};

module.exports = {
    handleFormSubmit
};
