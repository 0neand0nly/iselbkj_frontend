import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BoardService from '../service/BoardService';
import cweService from '../service/CweService';
const ReadBoardComponent = () => {
    const { cwe_id } = useParams();
    const navigate = useNavigate();
    const [board, setBoard] = useState({});

    useEffect(() => {
        const fetchBoard = async () => {
            const res = await BoardService.getOneBoard(cwe_id);
            setBoard(res.data);
        };

        fetchBoard();
    }, [cwe_id]);

    const goToList = () => {
        navigate('/');
    };

    const goToUpdate = (event) => {
        event.preventDefault();
        navigate(`/create-CODE/${cwe_id}`);
    }

    const deleteView = async () => {
        if (window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            try {
                // First, delete the board
                const res1 = await BoardService.deleteBoard(cwe_id);
                console.log("BoardService delete result => " + JSON.stringify(res1));
                if (res1.status !== 200) {
                    alert("글 삭제가 실패했습니다.");
                    return;
                }

                // Then, delete the CWE
                const res2 = await cweService.deleteCwe(cwe_id);
                console.log("cweService delete result => " + JSON.stringify(res2));
                if (res2.status !== 200) {
                    alert("글 삭제가 실패했습니다.");
                    return;
                }

                // If both deletions are successful, navigate to '/board'
                navigate('/');
            } catch (error) {
                console.log("delete error => " + error);
                alert("글 삭제 중 오류가 발생했습니다.");
            }
        }
    };









    return (
        <div>
            <div className = "card col-md-6 offset-md-3">
                <h3 className ="text-center"> Code Detail</h3>
                <div className = "card-body">
                    { /* call your returnBoardType method here if you still need it */ }
                    <div className = "row">
                        <label> CWE_ID </label> : {board.cwe_id}
                    </div>
                    <div className = "row">
                        <label> CWE_NAME </label> : {board.cwe_name}
                    </div>

                    <div className = "row">
                        <label> GOOD_SOURCECODE </label> : <br></br>
                        <textarea value={board.srcGood} readOnly/>
                    </div >

                    <div className = "row">
                        <label> Bad_SOURCECODE </label> : <br></br>
                        <textarea value={board.srcBad} readOnly/>
                    </div >

                    <div className = "row">
                        <label> GOOD_BYTECODE </label> : <br></br>
                        <textarea value={board.byteGood} readOnly/>
                    </div >

                    <div className = "row">
                        <label> Bad_ByteCODE </label> : <br></br>
                        <textarea value={board.byteBad} readOnly/>
                    </div >

                    <button className="btn btn-primary" onClick={goToList} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                    <button className="btn btn-info" onClick={goToUpdate} style={{marginLeft:"10px"}}>글 수정</button>
                    <button className="btn btn-danger" onClick={deleteView} style={{marginLeft:"10px"}}>글 삭제</button>
                </div>
            </div>
        </div>
    );
};

export default ReadBoardComponent;
