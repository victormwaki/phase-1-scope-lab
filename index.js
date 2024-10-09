// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// 1) Function that returns the customerName
function returnCustomerName() {
    return customerName;
}

// 2) Function that modifies the customerName variable by making it uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3) Function to set bestCustomer in global scope to 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';  // This will create a global variable bestCustomer
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Changing the global bestCustomer
}

// Declare a constant leastFavoriteCustomer and set its value
const leastFavoriteCustomer = 'someone';

// Function to try and change the leastFavoriteCustomer (will throw an error)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'anyone';  // Will throw an error since leastFavoriteCustomer is a constant
}

// Example usage and testing:

// Check customerName
console.log(returnCustomerName()); // Output: 'bob'

// Modify customerName to uppercase
upperCaseCustomerName();
console.log(returnCustomerName()); // Output: 'BOB'

// Set and modify bestCustomer
setBestCustomer()
console.log(bestCustomer); // Output: 'not bob'

overwriteBestCustomer()
console.log(bestCustomer); // Output: 'maybe bob'

// Try to change the constant leastFavoriteCustomer
try {
    changeLeastFavoriteCustomer();
} catch (error) {
    console.log(error.message); // Output: Assignment to constant variable.
}
