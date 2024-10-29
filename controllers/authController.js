const AuthController = {
    login: (req, res) => {
        res.send('POST/auth/login');
    },
    register: (req, res) => {
        res.send('POST/auth');
    }
}

export default AuthController;