import React, { useEffect, useState } from "react";
import Button from "../../components/button/button.component";
import { MdShare } from "react-icons/md";
import ShareDropdown from "../../components/shareDropdown/shareDropdown.component";
import SelectAccountDropdown from "../../components/selectAccountDropdown/selectAccount.component";
import { useDispatch } from "react-redux";
import { loadAccounts } from "../../store/accounts";

const Home: React.FC = () => {
  type ACTIVE_DROPDOWN = null | "SHARE_DROPDOWN" | "SELECT_ACCOUNT_DROPDOWN";
  const [activeDropdown, setActiveDropdown] = useState<ACTIVE_DROPDOWN>(null);
  const dispatch=useDispatch();

  const openShareDropdown=()=>setActiveDropdown('SHARE_DROPDOWN');
  const openSelectAccountDropdown=()=>setActiveDropdown('SELECT_ACCOUNT_DROPDOWN');
  const hideDropdown=()=>setActiveDropdown(null);

  const clickHandler=()=>{
    if(!activeDropdown) openShareDropdown();
    else hideDropdown();
  }

  useEffect(()=>{
    dispatch<any>(loadAccounts());
  },[]);
  
  return (
    <div>
        <Button title="Share" endIcon={MdShare} onClick={clickHandler}/>
        {
            activeDropdown==='SHARE_DROPDOWN'
                ?<ShareDropdown openSelectAccountDropdown={openSelectAccountDropdown}/>
                :activeDropdown==='SELECT_ACCOUNT_DROPDOWN'
                    ?<SelectAccountDropdown />
                    :null
        }
    </div>
  );
};

export default Home;
