import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import Chart from "react-google-charts";
import './../App.css';

/**
 * Get current path page
 */
function HeaderView() {
    let location = useLocation();
    return location;
}

/**
 * Render the chart with the users and dream hours
 * @param props
 *  - HoursStatistics: list with all users and their corresponding dream hours
 */
const HoursChart = props => {
    const location = HeaderView();
    const {HoursStatistics} = props;
    return (
        <>
            <div style={{ display: 'flex', maxWidth: 600 }}>
                <Chart
                     width={location.pathname === '/hours' ? 1200 : 600}

                    height={location.pathname === '/hours' ? 600 : 300}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={HoursStatistics}
                    options={{
                        title: 'Dream hours',
                        chartArea: { width: '65%' },
                        hAxis: {
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'Hours',
                        },
                    }}
                />

            </div>
            <div>
                {location.pathname === '/hours' ?
                    <Link to="/" className="Back">
                        <i className="material-icons">arrow_back</i>Go back
                    </Link> : null}
            </div>
        </>
    );
};

HoursChart.propTypes = {
    HoursStatistics: PropTypes.array,
};

export default HoursChart;
