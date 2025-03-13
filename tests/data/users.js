module.exports = {
    validUsers: [
        { username: "standard_user", password: "secret_sauce" },
        { username: "locked_out_user", password: "secret_sauce" },
        { username: "problem_user", password: "secret_sauce" },
        { username: "performance_glitch_user", password: "secret_sauce" },
        { username: "error_user", password: "secret_sauce" },
        { username: "visual_user", password: "secret_sauce" }
    ],

    invalidUsers: [
        { username: "", password: "", error: "Username is required" }, 
        { username: "standard_user", password: "", error: "Password is required" },
        { username: "", password: "secret_sauce", error: "Username is required" },
        { username: "fake_user", password: "wrong_password", error: "Epic sadface: Username and password do not match" }
    ]
};
