import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Páginas
import Home from './Home';
import NewFilme from './NewFilme';
import Edit from './Edit';
import EditFilme from './EditFilme';
import Detalhes from './Detalhes';


function AppRoutes() { 

    const location = useLocation()
    return(
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element= {<Home/>} />
                <Route path='/detalhes/:id' exact element= {<Detalhes/>} />
                <Route path='/newfilme' exact element= {<NewFilme/>} />
                <Route path='/edit' exact element= {<Edit/>} />
                <Route path='/editfilme/:id' exact element= {<EditFilme/>} />
            </Routes>
        </AnimatePresence>
    )

}
export default AppRoutes