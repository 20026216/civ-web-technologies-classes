let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

function isValidEmail(email) {
    const valid = email.match(regex);
    return valid;
}

// Test cases
console.log(isValidEmail("john@example.com")); // Should return true
console.log(isValidEmail("invalidemail@.com")); // Should return false
console.log(isValidEmail("no spaces@example.com")); // Should return true
