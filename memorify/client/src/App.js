import './App.css';
import './index.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import Form from './components/Form/Form';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Form />} />
                <Route path='/cards' element={<Cards />} />
                <Route />
                {/* <Route path='/login' element={<Login />} /> */}
                {/* <Route path='/register' element={<Register />} /> */}
            </Routes>
        </>
    );
}

export default App;