import axios from "axios";

const BOARD_URL = "https://port-0-iselbkj-backend-kvmh2mljph7x12.sel4.cloudtype.app/CODE";
//const BOARD_URL = "http://localhost:8080/CODE";
class BoardService {
    getBoards() {
        return axios.get(BOARD_URL);
    }

    createBoard(CODE) {
        return axios.post(BOARD_URL, CODE);
    }

    getOneBoard(cwe_id) {
        console.log(cwe_id);
        return axios.get(BOARD_URL + "/" + cwe_id);
    }

    updateBoard(cwe_id, cwedao) {
        return axios.put(BOARD_URL + "/" + cwe_id, cwedao);
    }

    deleteBoard(cwe_id)
    {
        return axios.delete(BOARD_URL + "/" + cwe_id);
    }



}

const boardService = new BoardService();
export default boardService;
