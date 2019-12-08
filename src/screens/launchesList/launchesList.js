import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';
import ListItem from '../../components/ListItem';

const List = ({launches, requestGetLaunches}) => {

    useEffect(() => {
        requestGetLaunches()
    }, [requestGetLaunches]);

    return (
        <div>
            <h2>Launches</h2>
            { launches && <Table>
                <thead>
                    <tr>
                        <th>Flight number</th>
                        <th>Mission name</th>
                        <th>Rocket name</th>
                        <th>Launch date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    launches && launches.map( launch =>  <ListItem item={launch} key={launch.flight_number}/>)
                }
                </tbody>
            </Table>}
        </div>
    )
}

List.propTypes = {
    launches: PropTypes.array,
    requestGetLaunches: PropTypes.func
}

export default List;