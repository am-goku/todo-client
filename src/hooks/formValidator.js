
const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

const checkEmail = (email) => {
    return EMAIL_PATTERN.test(email);
};


export {checkEmail}