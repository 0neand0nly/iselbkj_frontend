import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import service from '../service/ChunkService';

const CreateChunkComponent = () => {
    const navigate = useNavigate();
    const { cwe_id } = useParams();
    const isCreateMode = cwe_id === '_create';

    const [state, setState] = useState({
        cwe_id: '',
        cwe_name: '',
        source_code: '',
        byte_code: ''
    });

    useEffect(() => {
        if (!isCreateMode) {
            service.getOneBoard(cwe_id)
                .then(response => {
                    const CHUNK = response.data;
                    setState({
                        cwe_id: CHUNK.cwe_id ,
                        cwe_name: CHUNK.cwe_name ,
                        source_code: CHUNK.source_code ,
                        byte_code: CHUNK.byte_code
                    });
                })
                .catch(err => console.error(err));
        }
    }, [cwe_id, isCreateMode]);



    const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const createOrUpdateBoard = (event) => {
        event.preventDefault();
        const CHUNK = { ...state };

        if (isCreateMode) {
           // console.log(CODE);
            service.createBoard(CHUNK).then(() => navigate('/CHUNK')).catch(err => console.error(err));
        } else {
            service.updateBoard(cwe_id, CHUNK).then(() => navigate('/CHUNK')).catch(err => console.error(err));
        }
    };


    const cancel = () => {
        navigate('/CHUNK');
    };

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Input New Code</h3>
                        <div className = "card-body">
                            <form>
                                <div className="form-group">
                                    <label> CWE_ID </label>
                                    <input type="text" placeholder="cwe_id" name="cwe_id" className="form-control" value={state.cwe_id} onChange={handleChange}/>
                                </div>

                                <div className = "form-group">
                                    <label> CWE_NAME </label>
                                    <input type="text" placeholder="cwe_name" name="cwe_name" className="form-control"
                                           value={state.cwe_name} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label> Source Code </label>
                                    <textarea placeholder="source_code" name="source_code" className="form-control"
                                              value={state.source_code} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label> ByteCode </label>
                                    <textarea placeholder="byte_code" name="byte_code" className="form-control"
                                              value={state.byte_code} onChange={handleChange}></textarea>
                                </div>
                                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px", float: "right"}}>Cancel</button>
                                <button className="btn btn-success" onClick={createOrUpdateBoard} style={{marginLeft:"10px", float: "right"}}>Save</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateChunkComponent;
