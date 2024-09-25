import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyList from './Component/PropertyList/PropertyList';
import RegisterUser from './Component/RegisterUser/RegisterUser'; // Assume you create this
import Login from './Component/Login/Login'; // Assume you create this
import AddProperty from './Component/AddProperty/AddProperty'; // Assume you create this

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={PropertyList} />
                <Route path="/register" component={RegisterUser} />
                <Route path="/login" component={Login} />
                <Route path="/add-property" component={AddProperty} />
            </Routes>
        </Router>
    );
}

export default App;
