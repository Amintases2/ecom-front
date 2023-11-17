import axios from "axios";
import Cookies from "universal-cookie";

class SettingsServices {
    cookies = new Cookies();

    getHeaders() {
        const token = this.cookies.get("token");
        return {
            Authorization: `Token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

    async getSettings(){
        const headers = this.getHeaders()
        const url = `http://127.0.0.1:8000/api/settings/1/`
        return await axios.get(url, {headers})
    }

}

export default new SettingsServices();