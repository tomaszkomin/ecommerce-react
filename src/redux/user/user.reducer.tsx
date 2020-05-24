import UserActionTypes from './user.types';
const INITIAL_STATE = {
    currentUser: null
}
type UserState = { currentUser: any} ;
type ActionDef = { type: string, payload: any };

const userReducer = (state = INITIAL_STATE, action: ActionDef) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}
export default userReducer;