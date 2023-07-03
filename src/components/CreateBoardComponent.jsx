import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../service/BoardService';

const CreateBoardComponent = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        cwe_id: '',
        cwe_name: '',
        srcGood: '',
        srcBad: '',
        byteGood: '',
        byteBad: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const createBoard = (event) => {
        event.preventDefault();
        let CODE = {
            cwe_id: state.cwe_id,
            cwe_name: state.cwe_name,
            srcGood: state.srcGood,
            srcBad: state.srcBad,
            byteGood: state.byteGood,
            byteBad: state.byteBad,
        };
        console.log("CODE => "+ JSON.stringify(CODE));
        service.createBoard(CODE).then(() => navigate('/CODE'));
    };

    const cancel = () => {
        navigate('/CODE');
    };

    return (
        <div>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Input New Code</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> CWE_ID </label>
                                    <input type="text" placeholder="cwe_id" name="cwe_id" className="form-control"
                                           value={state.cwe_id} onChange={handleChange}/>
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

                                <button className="btn btn-success" onClick={createBoard}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBoardComponent;
