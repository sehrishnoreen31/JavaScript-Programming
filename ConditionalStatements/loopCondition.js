// user level
let userRole = 'manager';
let accessLevel;

if (userRole == 'admin'){
    accessLevel =  'Full Access!';
} else if(userRole == 'manager'){
    accessLevel = 'Limited Access!';
}
else{
    accessLevel = 'Access denied!'
}

// print access
console.log('Access Level: ', accessLevel);

// login status
let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole == 'user'){
        userMessage = 'Welcome user!';
    } else if (userRole == 'admin'){
        userMessage = 'Welcome admin!';
    }else {
        userMessage = 'Welcome manager!';
    }
}

console.log(userMessage);

// authenticate user
let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? 'Authenticated': 'Not Authenticated';
console.log(authenticationStatus);
