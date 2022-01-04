import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    );
};

export default MyRoutes;
