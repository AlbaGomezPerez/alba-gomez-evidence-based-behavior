import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render the HTML episodes list in list format
 * @param props
 *  - AllEpisodes: list with all episodes
 *  - SearchEpisode: text value that the users writes into the input
 * @returns the HTML generated
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
            <tbody>
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
