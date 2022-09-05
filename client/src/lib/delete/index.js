import { message } from "antd";
import axios from "../axios";


async function deleteMock(id) {
    const res = await axios.delete('mocky/delete/' + id);
    console.log(res);
}

export default deleteMock;