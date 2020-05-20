const INITIAL_STATE = {
    currentUser: null
}
type UserState = { currentUser: any} ;
type ActionDef = { type: string, payload: any };

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const userReducer = (state: UserState = INITIAL_STATE, action: ActionDef) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;