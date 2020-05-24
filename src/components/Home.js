import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import UsersList from "./UsersList";
import HoursChart from "./HoursChart";
import CitiesChart from "./CitiesChart";


/**
 * Render the chart with the visited cities
 * @param props
 *  - CitiesChart: list with all cities
 * @returns the HTML generated
 */
const Home = props => {
    const {AllUsers, CitiesStatistics, HoursStatistics} = props;
    return (
        <div>
            <div className="App-graph">
                <div>
                    <HoursChart
                        HoursStatistics={HoursStatistics}/>
                </div>
                <div>
                    <CitiesChart
                        CitiesStatistics={CitiesStatistics}/>
                </div>
            </div>
            <UsersList
                AllUsers={AllUsers}/>
        </div>

    );
};

Home.propTypes = {
    AllUsers: PropTypes.array,
    CitiesStatistics: PropTypes.array,
    HoursStatistics: PropTypes.array
};

export default Home;
