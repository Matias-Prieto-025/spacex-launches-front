import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types'
import LaunchesList from '../screens/launchesList';
import LaunchDetail from '../screens/launchDetail';
import Alert from 'react-bootstrap/Alert';

const Root = ({ error, message, setError, setMessage }) => (
  <div>
    { error && <Alert variant="danger" onClose={() => setError(null)} dismissible>{error}</Alert> }
    { message && <Alert variant="primary" onClose={() => setMessage(null)} dismissible>{message}</Alert> }
    <Switch>
      <Route exact path="/" component={LaunchesList}/>
      <Route path="/:id" component={LaunchDetail}/>
    </Switch>
  </div>
);

Root.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
  setError: PropTypes.func,
  setMessage: PropTypes.func
}

export default Root;
