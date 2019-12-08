import { connect } from 'react-redux';
import { launchById } from '../../services/store/launches/selectors';
import LaunchDetail from './launchDetail';
import { requestSetFavorite } from '../../services/store/launches/actions';

const mapStateToProps = (state, ownProps) => ({
    launch: launchById(state, ownProps.match.params.id)
});

const mapDispatchToProps = {
    requestSetFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchDetail);
