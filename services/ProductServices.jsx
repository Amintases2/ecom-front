import axios from "axios";
import Cookies from "universal-cookie";

class ProductServices {
    cookies = new Cookies();

    getHeaders() {
        const token = this.cookies.get("token");
        return {
            Authorization: `Token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }

    async getProducts(title, page = 1) {
        if (title) {
            return await axios.get(`http://127.0.0.1:8000/api/products/?title=${title}&page=${page}`)
        }
        return await axios.get(`http://127.0.0.1:8000/api/products/?page=${page}`)
    }

}

export default new ProductServices();
