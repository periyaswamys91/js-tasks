//Topic: Optimizing Conditional Paths
//5. Create an authentication validator. The system checks: 1. Is the account suspended? 2. Is the password correct? 3. Is the MFA token valid?
let accountSuspended = false;
let passwordCorrect = true;
let MFATokenValid = true;
if (accountSuspended) {
    console.log('Account Suspended. Access Denied.');
} else if (!passwordCorrect) {
    console.log('Incorrect Password. Access Denied.');
} else if (!MFATokenValid) {
    console.log('Invalid MFA Token. Access Denied.');
} else {
    console.log('Authentication Successful.');
}
