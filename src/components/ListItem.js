import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const ListItem = ({item}) => {

    const { mission_name , flight_number, rocket: {rocket_name }, isFavorite, launch_date_unix } = item;

    return (
        <tr>
            <td>{flight_number}</td>
            <td>{mission_name}</td>
            <td>{rocket_name}</td>
            <td>{moment.unix(launch_date_unix).format('MM/DD/YYYY HH:mm')}</td>
            <td>{isFavorite ? <img src='/star.png' alt="Fav" width="30" height="30"/> : ''}</td>
            <td><Link className="btn btn-primary btn-sm" to={{ pathname: `/${flight_number}`}}>Detail</Link></td>
        </tr>
    );
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ListItem;