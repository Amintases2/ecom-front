import axios from "axios";
import Cookies from "universal-cookie";
//import { AuthContext } from "../src/contexts/AuthContext";

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

  async authUser({ username, password }, setAuth, setAdmin) {
    setAuth(true);
    setAdmin(true);
    const url = "http://127.0.0.1:8000/api/auth/token/login";
    const postData = {
      username: username,
      password: password,
    };
    await axios.post(url, postData).then((res) => {
      this.cookies.set("token", res.data.auth_token);
      return this.cookies.get("token");
    });
  }

  async identifyUser(token, setAdmin) {
    setAdmin(true);
  }

  logoutUser() {}
}

export default new UserServices();
