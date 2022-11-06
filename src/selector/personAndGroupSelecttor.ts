import { RootState } from "../store/configureStore";
import { PERSON, GROUP } from "redux-store";

export default function (state: RootState) {
    const res: {
        person: PERSON[],
        group: GROUP[]
    } = {
        person: [],
        group: []
    };

    state.accounts.accounts.forEach(item=>{
        if(Object.prototype.hasOwnProperty.call(item,'members'))
            res.group.push(item as GROUP);
        else res.person.push(item as PERSON);
    });

    return res;
}