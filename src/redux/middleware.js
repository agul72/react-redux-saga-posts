import {CREATE_POST} from "./types";
import {toast} from "react-toastify";

const forbidden = ['fuck', 'spam']

export function forbiddenWorlds ({ dispatch }) {
    return function (next) {
        return function (action) {

            if (action.type === CREATE_POST) {
                const found = forbidden.filter(world => action.payload.title.includes(world));
                if (found.length) {
                    return toast.warning('Title includes forbidden worlds ' + found, {
                        position: toast.POSITION.TOP_LEFT
                    })
                }
            }
            return next(action);
        }
    }
}
