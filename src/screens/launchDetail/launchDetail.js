import React from 'react';
import { withRouter, Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DetailItem from '../../components/DetailItem';
import moment from 'moment';

const LaunchDetail = ({ launch, requestSetFavorite, history }) => {

    if (!launch) {
        history.push("/");
        return null;
    }

    const { flight_number, mission_name, rocket: { company, rocket_name}, isFavorite, launch_date_unix } = launch;

    return (
        <div>
            <h2>Launch detail</h2>
            <Table striped style={{ marginTop: 30 }}>
                <tbody>
                    <DetailItem title="Flight number:" val={flight_number.toString()} />
                    <DetailItem title="Mission:" val={mission_name.toString()} />
                    <DetailItem title="Rocket:" val={rocket_name.toString()} />
                    <DetailItem title="Company:" val={company.toString()} />
                    <DetailItem title="Date:" val={moment.unix(launch_date_unix).format('MM/DD/YYYY HH:mm')} />
                    <DetailItem title="Is favorite:" val={isFavorite ? <img src='/star.png' alt="Fav" width="30" height="30"/> : ''} />
                </tbody>
            </Table>
            <div className="row">
                <div className="col-6">
                    {
                        !isFavorite && <Button variant="info" onClick={ () => requestSetFavorite(flight_number)} >Make favorite!</Button>
                    }
                </div>
                <div className="col-6">
                    <Link className="btn btn-primary float-right" to={{pathname: "/"}}>Go back</Link>
                </div>
            </div>

        </div>
    )
}

LaunchDetail.propTypes = {
    launch: PropTypes.object.isRequired,
    requestSetFavorite: PropTypes.func
}

export default withRouter(LaunchDetail);