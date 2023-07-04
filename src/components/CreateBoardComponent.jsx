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
        service.createBoard(CODE).then(() => navigate('/CODE')).catch(err => console.error(err));
    };

    const cancel = () => {
        navigate('/CODE');
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
                                {/* Rest of the JSX code remains the same */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBoardComponent;
