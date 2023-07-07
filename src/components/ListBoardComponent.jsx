import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../service/BoardService';
import './ListBoardComponent.css';

class ListBoardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: [],
        };
        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount() {
        service.getBoards().then((res) => {
            console.log(res.data); // <-- add this
            const rearrangedData = res.data.map(item => {
                const { cwe_id, ...rest } = item;
                return { cwe_id, ...rest };
            });
            console.log(rearrangedData);
            this.setState({ boards: rearrangedData });
        });
    }

    createBoard() {
        this.props.navigate('/create-CODE/_create');
    }

    readBoard(cwe_id)
    {
        this.props.navigate('/read-CODE/${cwe_id}');
    }

    boardList() {
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                <h2 className="text-center">CODE LIST</h2>
                <div className="button-container">
                    <button className="btn btn-primary" onClick={this.createBoard}>Input Codes</button>
                    <button className="btn btn-primary" onClick={this.boardList}>Code MetaData</button>
                </div>
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>CWE_ID</th>
                            <th>CWE_NAME</th>
                            <th>GOOD_SOURCECODE</th>
                            <th>BAD_SOURCECODE</th>
                            <th>GOOD_BYTECODE</th>
                            <th>BAD_BYTECODE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map(
                                (CODE, index)=>
                                    <tr key = {index}>
                                        <td>{CODE.cwe_id}</td>
                                        <td>{CODE.cwe_name}</td>
                                        <td><textarea readOnly value={CODE.srcGood}></textarea></td>
                                        <td><textarea readOnly value={CODE.srcBad}></textarea></td>
                                        <td><textarea readOnly value={CODE.byteGood}></textarea></td>
                                        <td><textarea readOnly value={CODE.byteBad}></textarea></td>
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

const ListBoardComponentWrapper = () => {
    const navigate = useNavigate();
    return <ListBoardComponent navigate={navigate} />;
}

export default ListBoardComponentWrapper;
