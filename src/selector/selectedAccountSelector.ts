import { RootState } from "../store/configureStore";
import { ACCOUNT } from "redux-store";

function selectedAccountSelector(state: RootState) {
   const selectedAccounts=state.accounts.selected;
   const res=new Map<string, ACCOUNT>();
   for(let id in selectedAccounts){
    res.set(id, selectedAccounts[id] as any as ACCOUNT);
   }
   return res;
}   

export default selectedAccountSelector;