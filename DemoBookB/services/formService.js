const Form = require('../model/demoModel');
const { sendEmail } = require('../eMailsetUp/mailsetUp'); 

const saveFormdata = async (formdata) => {
    const newFormEntry = new Form(formdata);
    await newFormEntry.save();

    await sendEmail(formdata); 
    console.log('Form Data Saved and Email sent Successfully', newFormEntry);
};

module.exports = {
    saveFormdata
};
