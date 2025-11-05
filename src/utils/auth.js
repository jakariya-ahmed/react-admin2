// utils/auth.js

// Dummy authentication (replace with backend call later)
export const loginAdmin = (email, password) => {
    const adminEmail = "admin@example.com";
    const adminPwd = "123456";

    if (email === adminEmail && password === adminPwd) {
        localStorage.setItem("isAdminLoggedIn", "true");
        return true;
    }  else {
        return false;
    }
};

export const isAuthenticated = () => {
    return localStorage.getItem("isAdminLoggedIn") === "true";
}


// admin logout 
export const logoutAdmin = () => {
    localStorage.removeItem("isAdminLoggedIn");
}

