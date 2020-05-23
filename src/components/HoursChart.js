import React from 'react';
import PropTypes from 'prop-types';

import Chart from "react-google-charts";

/**
 * Render the chart with the users and dream hours
 * @param props
 *  - HoursStatistics: list with all users and their corresponding dream hours
 * @returns the HTML generated
 */
const HoursChart = props => {
    const {HoursStatistics} = props;
    console.log(HoursStatistics);
    return (
        <div style={{ display: 'flex', maxWidth: 600 }}>

            <Chart
                width={600}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={HoursStatistics}
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

    );
};

HoursChart.propTypes = {
    HoursStatistics: PropTypes.array,
};

export default HoursChart;
