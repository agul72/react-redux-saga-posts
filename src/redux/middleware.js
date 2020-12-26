import {CREATE_POST} from "./types";
import {showAlert} from "./appActions";

const forbidden = ['fuck', 'spam']

export function forbiddenWorlds ({ dispatch }) {
    return function (next) {
        return function (action) {

            if (action.type === CREATE_POST) {
                const found = forbidden.filter(world => action.payload.title.includes(world));
                if (found.length) {
                    return dispatch(showAlert('Title includes forbidden worlds ' + found, 3000));
                }
            }

            return next(action);
        }
    }
}
