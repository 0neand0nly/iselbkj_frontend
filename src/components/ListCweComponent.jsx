import React, {Component} from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../service/CweService';
import Boardservice from '../service/BoardService';
import './ListBoardComponent.css';

class CweList extends Component {
    constructor(props) {
        super(props);

        this.state={
            boards: []
        }
        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount() {
        service.getBoards().then((res) => {
            //console.log(res.data);  // Log the original data here
            this.setState({ boards: res.data });
        });
    }

    createBoard() {
        this.props.navigate('/create-CWE/_create');
    }

    boardList() {
        window.location.href = "/CODE";
    }

    readBoard(cwe_id)
    {
        this.props.navigate(`/read-CODE/${cwe_id}`);
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> CODE Meta Data </h2>
                <div className="button-container">
                    <button className="btn btn-primary" onClick={this.createBoard}>Input Codes</button>
                    <button className="btn btn-primary" onClick={this.boardList}>Code Lists</button>
                </div>
            
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>CWE_ID</th>
                            <th>CWE_NAME</th>
                            <th>소스단계 검출여부</th>
                            <th>바이트단계 검출여부</th>
                            <th>분석</th>
                            <th>요약</th>
                            <th>비고</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map(
                                (CWE, index)=>
                                    <tr key = {index}>
                                        <td> <a onClick={() => this.readBoard(CWE.cwe_id)}> {CWE.cwe_id} </a> </td>
                                        <td> <a onClick={() => this.readBoard(CWE.cwe_id)}> {CWE.cwe_name} </a> </td>
                                        <td> {CWE.isSrcidt}</td>
                                        <td> {CWE.isByteidt}</td>
                                        <td> <textarea readOnly value={CWE.report ? CWE.report : "No report available"}></textarea></td>
                                        <td> <textarea readOnly value={CWE.conclusion ? CWE.conclusion : "No conclusion available"}></textarea></td>
                                        <td> <textarea readOnly value={CWE.temp ? CWE.temp : "No additional details"}></textarea></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const ListCweComponent = (props) => {
    const navigate = useNavigate();
    return <CweList {...props} navigate={navigate} />
}

export default ListCweComponent;
