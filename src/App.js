import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/Home";



import './App.css';
import {GetCityStatistics, GetUsers} from "./services/UserService";
import HoursChart from "./components/HoursChart";
import CitiesChart from "./components/CitiesChart";



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            AllUsers: [],
            HoursStatistics: [],
            CitiesStatistics : []
        }
    }

    componentDidMount() {
        this.getUsersData();
    }

    getUsersData() {
        GetUsers()
            .then(data => {
                this.setState({
                    AllUsers: data.users
                });

                let hourStatistics = [['User', 'Hours']];
                this.state.AllUsers.forEach(user => hourStatistics.push([user.name, user.hours]));
                this.setState({
                    HoursStatistics: hourStatistics
                });
                const citiesStatistics = GetCityStatistics(this.state.AllUsers);
                this.setState( {
                    CitiesStatistics: citiesStatistics
                });
            });
    }


    render () {
        const {AllUsers, HoursStatistics, CitiesStatistics} = this.state;
        return (
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Mi app</a>
                    </div>
                </nav>
                    <main className="">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={routerProps => (
                                    <Home
                                        AllUsers={AllUsers}
                                        HoursStatistics={HoursStatistics}
                                        CitiesStatistics={CitiesStatistics}/>
                                )}
                            />
                            <Route
                                path="/hours"
                                render={routerProps => (
                                    <HoursChart
                                    HoursStatistics={HoursStatistics}/>
                                )}
                            />
                            <Route
                                path="/cities"
                                render={routerProps => (
                                    <CitiesChart
                                        CitiesStatistics={CitiesStatistics}/>
                                )}
                            />

                        </Switch>
                    </main>


                    <footer className="page-footer">
                                <div className="container">
                                <div className="row">
                                <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
        </ul>
        </div>
        </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
        </div>
                    </footer>
            </div>
        )
    };
}

export default App;
