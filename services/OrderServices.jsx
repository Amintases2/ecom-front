import axios from "axios";
import Cookies from "universal-cookie";

class OrderServices {
    cookies = new Cookies();

    getHeaders() {
        const token = this.cookies.get("token");
        return {
            Authorization: `Token ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        };
    }


    async createOrder(product_id, order_status) {
        const headers = this.getHeaders()
        const url = `http://127.0.0.1:8000/api/orders/`
        return await axios.post(url, {
            product_id: product_id,
            order_status: order_status
        }, {headers})
    }

    async getMyOrders(){
        const headers = this.getHeaders()
        const url = `http://127.0.0.1:8000/api/orders/`
        return await axios.get(url, {headers})
    }

}

export default new OrderServices();
