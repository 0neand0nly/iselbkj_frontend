import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../service/CweService';

const CreateCweComponent = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        cwe_id: '',
        cwe_name: '',
        isSrcidt: '',
        isByteidt: '',
        report: '',
        conclusion: '',
        temp: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const createBoard = (event) => {
        event.preventDefault();
        let CWE = {
            cwe_id: state.cwe_id,
            cwe_name: state.cwe_name,
            isSrcidt: state.isSrcidt,
            isByteidt: state.isByteidt,
            report: state.report,
            conclusion: state.conclusion,
            temp: state.temp,
        };
        console.log("CWE => "+ JSON.stringify(CWE));
        service.createBoard(CWE).then(() => navigate('/CWE')).catch(err => console.error(err));

    };

    const cancel = () => {
        navigate('/CWE');
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
                                <div className = "form-group">
                                    <label> 소스단계 검출여부 </label>
                                    <input type="text" placeholder="isSrcidt" name="isSrcidt" className="form-control"
                                           value={state.isSrcidt} onChange={handleChange}/>
                                </div>
                                <div className = "form-group">
                                    <label> 바이트단계 검출여부 </label>
                                    <input type="text" placeholder="isByteidt" name="isByteidt" className="form-control"
                                           value={state.isByteidt} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label> 분석 </label>
                                    <textarea placeholder="report" name="report" className="form-control"
                                              value={state.report} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label> 요약 </label>
                                    <textarea placeholder="conclusion" name="conclusion" className="form-control"
                                              value={state.conclusion} onChange={handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label> 비고 </label>
                                    <textarea placeholder="temp" name="temp" className="form-control"
                                              value={state.temp} onChange={handleChange}></textarea>
                                </div>

                                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px", float: "right"}}>Cancel</button>
                                <button className="btn btn-success" onClick={createBoard} style={{marginLeft:"10px", float: "right"}}>Save</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCweComponent;
