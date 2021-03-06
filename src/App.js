import React from 'react';
import 'antd/dist/antd.css';
import Chart from "react-google-charts";


import './App.css';
import {GetCityStatistics, GetUsers} from "./services/UserService";


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
        return (
            <div className="container">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">hola</a>
                    </div>
                </nav>
                    <main className="">
                        <div className="App-graph">
            <div style={{ display: 'flex', maxWidth: 600 }}>

    <Chart
        width={600}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={this.state.HoursStatistics}
        options={{
            title: 'Dream hours',
                chartArea: { width: '30%' },
            hAxis: {
                minValue: 0,
            },
            vAxis: {
                title: 'Hours',
            },
        }}

        />
        </div>
        <div style={{ display: 'flex', maxWidth: 600 }}>

    <Chart
        width={600}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={this.state.CitiesStatistics}
        options={{
            title: 'Cities visited',
                chartArea: { width: '30%' },
            hAxis: {
                minValue: 0,
            },
            vAxis: {
                title: 'Cities',
            },
        }}
        legendToggle
        />
        </div>
                        </div>
                            <table className="striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Dream hours</th>
                                        <th>Place</th>
                                    </tr>
                                </thead>
                            <tbody>
                            {this.state.AllUsers
                                .map((item, index) => {
                                    return (
                                        <tr key={index}>
                                        <td >{item.name}</td>
                                        <td >{item.hours}</td>
                                        <td >{item.places.map(place => <span className="chip">{place}</span>)}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            </table>
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
