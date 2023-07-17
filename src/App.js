import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ListCweComponent from './components/ListCweComponent';
import CreateCweComponent from './components/CreateCweComponent';
import ReadBoardComponent from './components/ReadBoardComponent'
import ListChunkComponent from './components/ListChunkComponent';
import ReadChunkComponent from './components/ReadChunkComponent';
import CreateChunkComponent from './components/CreateChunkComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ListCweComponent />} />
                        <Route path="/CWE" element={<ListCweComponent />} />
                        <Route path="/read-CODE/:cwe_id" element={<ReadBoardComponent />} />
                        <Route path="/read-CHUNK/:cwe_id" element={<ReadChunkComponent />} />
                        <Route path="/CODE" element={<ListBoardComponent />} />
                        <Route path="/create-CODE/:cwe_id" element={<CreateBoardComponent/>} />
                        <Route path="/create-CHUNK/:cwe_id" element={<CreateChunkComponent/>} />
                        <Route path="/create-CWE/_create" element={<CreateCweComponent/>} />
                        <Route path="/create-CHUNK/_create" element={<CreateCweComponent/>} />
                        <Route path="/CWE/create-CWE" element={<CreateCweComponent/>} />
                        <Route path="/CHUNK" element={<ListChunkComponent />} />
                       
                    </Routes>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
