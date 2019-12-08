import React from 'react';
import PropTypes from 'prop-types'

const DetailItem = ({ title, val }) => (
    <tr>
        <td width="30%">{title}</td>
        <td>{val}</td>
    </tr>
);

DetailItem.propTypes = {
    title: PropTypes.string.isRequired,
    val: PropTypes.string.isRequired
}

export default DetailItem;