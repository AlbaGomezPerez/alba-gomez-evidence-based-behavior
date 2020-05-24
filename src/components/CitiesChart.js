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
 * Render the chart with the visited cities
 * @param props
 *  - CitiesChart: list with all cities
 * @returns the HTML generated
 */
const CitiesChart = props => {
    const location = HeaderView();
    const {CitiesStatistics} = props;
    return (
        <>
            <div style={{ display: 'flex', maxWidth: 600 }}>
                <Chart
                    width={location.pathname === '/cities' ? 1200 : 600}

                    height={location.pathname === '/cities' ? 600 : 300}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={CitiesStatistics}
                    options={{
                        title: 'Cities visited',
                        chartArea: { width: '45%' },
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
            <div>
                {location.pathname === '/' ?
                    <Link to="cities" className="More">
                        <i className="material-icons">info</i>More info
                    </Link> : null}
            </div>
            <div>
            {location.pathname === '/cities' ?
                <Link to="/" className="Back">
                    <i className="material-icons">arrow_back</i>Go back
                </Link> : null}
            </div>
        </>
    );
};

CitiesChart.propTypes = {
    CitiesStatistics: PropTypes.array,
};

export default CitiesChart;
