import axios from "axios";
import Cookies from "universal-cookie";

class UserServices {
    cookies = new Cookies();

    getHeaders() {
        const token = this.cookies.get("token");
        return {
            Authorization: `Token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

    async authUser({username, password}, setAuth, setAdmin, navigate) {
        const url = "http://127.0.0.1:8000/api/auth/token/login";
        const postData = {
            username: username,
            password: password,
        };
        await axios.post(url, postData).then(async (res) => {
            this.cookies.set("token", res.data.auth_token);
            await this.identifyUser(setAuth, setAdmin);
            await navigate('/')
        });
    }

    async identifyUser(setAuth, setAdmin) {
        const url = "http://127.0.0.1:8000/api/auth/me";
        const headers = this.getHeaders()
        await axios.get(url, {headers}).then((res) => {
            if (res.data.is_staff) {
                setAdmin(true);
            }
            setAuth(true);
            this.cookies.set("first_name", res.data.first_name);
            this.cookies.set("last_name", res.data.last_name);
        });
    }

    getUserInfo() {
        const firstName = this.cookies.get("first_name");
        const lastName = this.cookies.get("last_name");
        return {firstName, lastName}

    }

    logoutUser(setAuth, setAdmin, navigate) {
        this.cookies.remove('token', {path: '/'});
        this.cookies.remove('first_name', {path: '/'});
        this.cookies.remove('last_name', {path: '/'});
        setAuth(false)
        setAdmin(false)
        navigate('/login')
    }
}

export default new UserServices();
