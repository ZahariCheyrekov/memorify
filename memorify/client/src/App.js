import './App.css';
import './index.css';

import { Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CreateCard from './components/Cards/CreateCard/CreateCard';
import EditCard from './components/Cards/EditCard/EditCard';
import Cards from './components/Cards/Cards';
import CardDetails from './components/Cards/CardDetails/CardDetails';
import Auth from './components/Auth/Auth';
import NotFound404 from './components/NotFound404/NotFound404';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';

function App() {
    return (
        <AuthContextProvider>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path='/create' element={<CreateCard />} />
                    <Route path='/memories/:id/edit' element={<EditCard />} />
                </Route>
                <Route path='/memories' element={<Cards />} />
                <Route path='/memories/:id' element={<CardDetails />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='*' element={<NotFound404 />} />
            </Routes>
        </AuthContextProvider>
    );
}

export default App;