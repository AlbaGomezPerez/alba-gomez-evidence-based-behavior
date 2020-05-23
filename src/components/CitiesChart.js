import React from 'react';
import PropTypes from 'prop-types';

import Chart from "react-google-charts";

/**
 * Render the chart with the visited cities
 * @param props
 *  - CitiesChart: list with all cities
 * @returns the HTML generated
 */
const CitiesChart = props => {
    const {CitiesStatistics} = props;
    return (
        <div style={{ display: 'flex', maxWidth: 600 }}>
            <Chart
                width={600}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={CitiesStatistics}
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

    );
};

CitiesChart.propTypes = {
    CitiesStatistics: PropTypes.array,
};

export default CitiesChart;
