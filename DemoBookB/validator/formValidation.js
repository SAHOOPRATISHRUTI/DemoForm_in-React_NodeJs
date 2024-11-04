const Messages = require('../contstants/message');

const validateFormData = (formData) => {
    const errors = {};

    if (!formData.name || formData.name.length < 3) {
        errors.name = 'Name must be at least 3 characters long.';
    }

    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
        errors.mobile = 'Mobile number must be exactly 10 digits.';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid.';
    }

    if (!formData.message || formData.message.trim() === '') {
        errors.message = 'Message cannot be empty.';
    }

    return errors;
};

module.exports = { validateFormData };
