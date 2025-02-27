"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
class LoginController {
    constructor(login) {
        this.login = login;
    }
    async handler(request, response) {
        try {
            const email = request.body.email;
            const password = request.body.password;
            const token = await this.login.auth({ email, password });
            response.status(200).json({ token });
        }
        catch (error) {
            response.status(500).json({ message: "Fail on authentication" });
        }
    }
}
exports.LoginController = LoginController;
