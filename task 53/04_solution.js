// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function passwordValidator(password) {
    if (password.length < 8 ) {
        return false
    }

    const hasUppercase = /[A-Z]/.test(password);

    const hasLowercase = /[a-z]/.test(password);

    const hasDigit = /[0-9]/.test(password);

    return hasUppercase && hasLowercase && hasDigit;

    
}

console.log(passwordValidator("Password123")); 
console.log(passwordValidator("password"));    
console.log(passwordValidator("PASSWORD123")); 
console.log(passwordValidator("Pass12"));      
