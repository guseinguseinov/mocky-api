import axios from "../axios";

async function deleteMock(id) {
    const res = await axios.delete('mocky/delete/' + id);
    return res
}

export default deleteMock;