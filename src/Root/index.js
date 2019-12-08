import Root from './Root';
import { connect } from 'react-redux';
import { setError, setMessage } from '../services/store/app/actions'

const mapStateToProps = (state) => ({
    error: state.app.error,
    message: state.app.message
});

const mapDispatchToProps= {
    setError, 
    setMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);