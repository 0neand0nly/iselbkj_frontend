import axios from "axios";

const CWE_URL ="http://localhost:8080/CWE";

class CweService{
    getBoards(){
        return axios.get(CWE_URL);
    }
    createBoard(CWE)
    {
        return axios.post(CWE_URL,CWE);
    }

}

export default new CweService();
