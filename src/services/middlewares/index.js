import { all } from 'redux-saga/effects';

import { launchesSagas } from './launches';

function* mainSaga() {
    yield all([
        ...launchesSagas
    ]);
}

export default mainSaga;
