const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = (user:any) => ({
    type: SET_CURRENT_USER,
    payload : {...user}
});