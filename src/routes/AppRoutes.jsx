import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Páginas
import Home from './Home';
import NewPoster from './NewPost';
import Edit from './Edit';
import EditReal from './EditReal';
import { AnimatePresence } from 'framer-motion';

function AppRoutes() { 

    const location = useLocation()
    return(
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element= {<Home/>} />
                <Route path='/new' exact element= {<NewPoster/>} />
                <Route path='/edit' exact element= {<Edit/>} />
                <Route path='/editreal/:id' exact element= {<EditReal/>} />
            </Routes>
        </AnimatePresence>
    )

}
export default AppRoutes