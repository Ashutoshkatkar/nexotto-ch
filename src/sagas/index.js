import { put, takeLatest, all } from "redux-saga/effects";



function* login(action) {
    const json = yield fetch('https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),

    }).then((response) => response.json());

    yield put({ type: "LOGIN_DETAILS_RECEIVED", json: json });
}

function* checklogin(action) {
    const json = yield fetch(' https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),

    }).then((response) => response.json());

    yield put({ type: "logindeatils", json: json });
}










function* actionWatcher() {
    yield takeLatest("login", login);
    yield takeLatest("checklogin", checklogin);
}


export default function* rootSaga() {
    yield all([actionWatcher()]);
}