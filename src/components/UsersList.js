// import React from 'react';
// import PropTypes from 'prop-types';
//
// /**
//  * Render the HTML episodes list in list format
//  * @param props
//  *  - AllEpisodes: list with all episodes
//  *  - SearchEpisode: text value that the users writes into the input
//  * @returns the HTML generated
//  */
// const UsersList = props => {
//     const {AllUsers} = props;
//     return (
//         <ul className="collection">
//             {AllUsers
//                 .map((item, index) => {
//                     return (
//                         <li className="collection-item avatar" key={index}>
//                             <span className="title">{item.name}</span>
//                             <p>{item.hours}</p>
//                         </li>
//                     );
//                 })}
//         </ul>
//     );
// };
//
// UsersList.propTypes = {
//     AllUsers: PropTypes.array,
// };
//
// export default UsersList;
