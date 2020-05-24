import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render the table with the users list and their data
 * @param props
 *  - AllUsers: list with all users, visited cities and dream hours
 */
const UsersList = props => {
    const {AllUsers} = props;
    return (
        <table className="striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Dream hours</th>
                <th>Place</th>
            </tr>
            </thead>
            <tbody >
            {AllUsers
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

    );
};

UsersList.propTypes = {
    AllUsers: PropTypes.array,
};

export default UsersList;
