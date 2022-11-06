import { RootState } from "../store/configureStore";
import { PERSON, GROUP, ACCOUNT } from "redux-store";
import { useSelector } from "react-redux";

function searchMatch(account: ACCOUNT, search: string) {
  const fullName = `${account.first_name} ${
    (account as PERSON).last_name || ""
  }`;
  return fullName.toLowerCase().includes(search.toLowerCase());
}

function usePersonAndGroupSelector(search: string) {
  const personAndGroup = useSelector((state: RootState) => {
    const res: {
      person: PERSON[];
      group: GROUP[];
    } = {
      person: [],
      group: [],
    };

    state.accounts.accounts.forEach((item) => {
      if (Object.prototype.hasOwnProperty.call(item, "members")) {
        if (search) {
          if (searchMatch(item, search)) res.group.push(item as GROUP);
        } else res.group.push(item as GROUP);
      } else {
        if (search) {
          if (searchMatch(item, search)) res.person.push(item as PERSON);
        } else res.person.push(item as PERSON);
      }
    });
    return res;
  });
  return personAndGroup;
}

export default usePersonAndGroupSelector;
