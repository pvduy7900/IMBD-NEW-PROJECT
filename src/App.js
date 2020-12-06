import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicNavbar from './components/PublicNavbar/PublicNavbar';
import HomePage from './components/Homepage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

const App = () => {
    return (
        <Router>
            <PublicNavbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/movie/:id" component={MovieDetailsPage} />
                {/* <Route exact path="/reading" component={ReadingPage} /> */}
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
        </Router>
    )
}

export default App
