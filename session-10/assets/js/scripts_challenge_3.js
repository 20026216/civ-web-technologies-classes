function isValidEmail(email) {
    // Initialise a variable to store feedback
    let feedback = "";

    // Check for basic email format
    // hint: email.match()
    if (email.match(/^\S+@\S+\.\S+$/) !== null) {
        return ` The email "${email}" is valid`;
    }

    // Check for spaces in the email
    // hint: use includes()
    else if (email.includes(" ")) {
        return `The email "${email}" is invalid`;
    }

    // Check for the "@" symbol
    // hint: use includes()
    else if (email.includes("@")) {
        return `The email "${email}" has @`;
    }

    // Check for multiple "@" symbols
    // hint: use split()
    // hint: count the number of parts using .length
    else if (email.includes("@")) {

    }

    // Check for "@." sequence
    // hint: use includes()

    // Check for "@" at the start or end
    // hint: use startsWith(), endsWith() & the or comparison opertor ||

    // Determine the final validation result & return the feedback messgae
    if (feedback === "") {
        // return a valid message
    } else {
        // return aan invalid message use=ing template literals
    }
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalid email@.com"));
console.log(isValidEmail("no spaces@example.com"));
console.log(isValidEmail("bademail@.com"));
console.log(isValidEmail("@invalid.com"));
console.log(isValidEmail("extra@@invalid.com"));