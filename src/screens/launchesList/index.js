import { connect } from 'react-redux';
import LaunchesList from './launchesList'
import { requestGetLaunches } from '../../services/store/launches/actions';

const mapStateToProps = (state) => {
    return {
        launches: state.launches.launches
    }
};

const mapDispatchToProps = {
    requestGetLaunches
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchesList)
