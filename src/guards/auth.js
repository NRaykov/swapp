export let isAuthenticated = false;

// SignIn Method
export const authenticate = onDone => {
    isAuthenticated = true;
    setTimeout(onDone, 100);
};

// SignOut Method
export const signout = onDone => {
    isAuthenticated = false;
    setTimeout(onDone, 100);
};
