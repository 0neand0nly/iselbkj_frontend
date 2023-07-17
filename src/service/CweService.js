import axios from 'axios';

const CWE_URL = "https://port-0-iselbkj-backend-kvmh2mljph7x12.sel4.cloudtype.app/CWE";
//const CWE_URL = "http://localhost:8080/CWE";
class CweService {
    getBoards() {
        return axios.get(CWE_URL);
    }

    createBoard(CWE) {
        return axios.post(CWE_URL, CWE);
    }

    getOneBoard(cwe_id) {
        return axios.get(`${CWE_URL}/${cwe_id}`);
    }

    deleteCwe(cwe_id) {
        return axios.delete(`${CWE_URL}/${cwe_id}`);
    }
}

const cweService = new CweService();

export default cweService;
