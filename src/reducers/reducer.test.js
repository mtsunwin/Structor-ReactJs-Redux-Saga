import * as TYPE from './../constants'

const initialState = {
    test: {
        thang: "test"
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPE.TEST:
            return {
                ...state,
                test: {
                    thang: "thang"
                }
            }
        default:
            break;
    }
    return state;
}
