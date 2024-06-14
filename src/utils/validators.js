export const validateSignInForm = (email, password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if (!isEmailValid)
        return "Email is not valid";

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isPasswordValid)
        return "Password is not valid";

    return null;
};

export const validateSignUpForm = (firstName, lastName, email, password) => {

    if (!firstName || firstName.length === 0)
        return "First Name cannot be empty";
    if (!lastName || lastName.length === 0)
        return "Last Name cannot be empty";

    return validateSignInForm(email, password);
};