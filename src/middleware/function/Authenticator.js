import { getUser } from "../../services/apis/user-methods"
import { removeReduxUser, setReduxUser } from "../../utils/reducers/user-reducer"




export const authenticate = () => async (dispatch) => {
    return new Promise((resolve, reject) => {
        getUser().then((res) => {
            dispatch(setReduxUser(res));
            resolve(true)
        }).catch((err) => {
            dispatch(removeReduxUser());
            reject(false)
        })
    })
};


export default authenticate;