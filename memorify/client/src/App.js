import './App.css';
import './index.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import CardDetails from './components/Cards/CardDetails/CardDetails';
import Auth from './components/Auth/Auth';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Form />} />
                <Route path='/memories' element={<Cards />} />
                <Route path='/memories/:id' element={<CardDetails />} />
                <Route path='/auth' element={<Auth />} />
            </Routes>
        </>
    );
}

export default App;