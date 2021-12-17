let INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case "SENDDATA":
            return { state, mdata: action.data }
        case "LOGIN_DETAILS_RECEIVED":
            return { ...state, loginDetails: action.json, loading: false };

        case "logindeatils":
            return { ...state, loginDetailsrecieved: action.json, loading: false };

        default:
            if (state != INITIAL_STATE) {
                return { state, loading: true };
            }
            return state;
    }

};

export default reducer;