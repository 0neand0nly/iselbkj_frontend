import React, {Component} from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../service/ChunkService';
import './ListBoardComponent.css';

class ChunkList extends Component {
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
        this.props.navigate('/create-CHUNK/_create');
    }

    boardList() {
        window.location.href = "/";
    }

    readBoard(cwe_id)
    {
        this.props.navigate(`/read-CHUNK/${cwe_id}`);
    }


    render() {
        return (
            <div>
                <h2 className="text-center"> CODE Chunk Data </h2>
                <div className="button-container">

                    <button className="btn btn-primary" onClick={this.boardList}>Back To Main</button>
                </div>
            
                <div className="row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>CWE_ID</th>
                            <th>CWE_NAME</th>
                            <th>Source Code</th>
                            <th>Byte Code</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map(
                                (CHUNK, index)=>
                                    <tr key = {index}>
                                        <td> <a  className="link-style" onClick={() => this.readBoard(CHUNK.cwe_id)}> {CHUNK.cwe_id} </a> </td>
                                        <td> <a className="link-style" onClick={() => this.readBoard(CHUNK.cwe_id)}> {CHUNK.cwe_name} </a> </td>
                                        <td> <textarea readOnly value={CHUNK.source_code ? CHUNK.source_code : "No source_code available"}></textarea></td>
                                        <td> <textarea readOnly value={CHUNK.byte_code ? CHUNK.byte_code : "No byte_code available"}></textarea></td>
                                        
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

const ListChunkComponent = (props) => {
    const navigate = useNavigate();
    return <ChunkList {...props} navigate={navigate} />
}

export default ListChunkComponent;
