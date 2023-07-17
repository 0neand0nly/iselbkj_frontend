import axios from "axios";

const BOARD_URL = "https://port-0-iselbkj-backend-kvmh2mljph7x12.sel4.cloudtype.app/CHUNK";
//const BOARD_URL = "http://localhost:8080/CHUNK";
class ChunkService {
    getBoards() {
        return axios.get(BOARD_URL);
    }

    createBoard(CHUNK) {
        return axios.post(BOARD_URL, CHUNK);
    }

    getOneBoard(cwe_id) {
        console.log(cwe_id);
        return axios.get(BOARD_URL + "/" + cwe_id);
    }

    updateBoard(cwe_id, cwevo) {
        return axios.put(BOARD_URL + "/" + cwe_id, cwevo);
    }

    deleteBoard(cwe_id)
    {
        return axios.delete(BOARD_URL + "/" + cwe_id);
    }



}


export default new ChunkService;
