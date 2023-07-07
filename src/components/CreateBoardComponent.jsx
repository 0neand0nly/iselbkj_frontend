import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';  
import service from '../service/BoardService';

const CreateBoardComponent = () => {
    const navigate = useNavigate();
    const { cwe_id } = useParams();
    const isCreateMode = cwe_id === '_create';

    const [state, setState] = useState({
        cwe_id: '',
        cwe_name: '',
        srcGood: '',
        srcBad: '',
        byteGood: '',
        byteBad: ''
    });

    // Load existing data when cwe_id is provided and not in create mode
    // Load existing data when cwe_id is provided and not in create mode
    useEffect(() => {
        if (!isCreateMode) {
            service.getOneBoard(cwe_id)
                .then(response => {
                    const board = response.data;
                    setState({
                        cwe_id: board.cwe_id,
                        cwe_name: board.cwe_name,
                        srcGood: board.srcGood,
                        srcBad: board.srcBad,
                        byteGood: board.byteGood,
                        byteBad: board.byteBad
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
        const CODE = { ...state };

        if (isCreateMode) {
            service.createBoard(CODE).then(() => navigate('/CODE')).catch(err => console.error(err));
        } else {
            service.updateBoard(cwe_id, CODE).then(() => navigate('/CODE')).catch(err => console.error(err));
        }
    };

    const cancel = () => {
        navigate('/');
    };

    // Removed getTItle() and componentDidMount() methods as these are not compatible with functional components

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
                                    <label> GOOD_SOURCECODE </label>
                                    <textarea placeholder="srcGood" name="srcGood" className="form-control"
                                              value={state.srcGood} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label> BAD_SOURCECODE </label>
                                    <textarea placeholder="srcBad" name="srcBad" className="form-control"
                                              value={state.srcBad} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label> GOOD_BYTEECODE </label>
                                    <textarea placeholder="byteGood" name="byteGood" className="form-control"
                                              value={state.byteGood} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label> BAD_BYTECODE </label>
                                    <textarea placeholder="byteBad" name="byteBad" className="form-control"
                                              value={state.byteBad} onChange={handleChange}></textarea>
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

export default CreateBoardComponent;
