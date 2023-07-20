import { useContext } from "react";
import { APPLICATION_TITTLE } from "../../utils/constants";
import { HeaderType } from "./Title/title.types";
import { Context } from "../../App";
import Title from "./Title/Title";
import { IInitialContext } from "../../App.types";

const Header = (): JSX.Element => {
    const appContext = useContext<IInitialContext>(Context);

    const handleClearFilters = () =>{
        console.log(appContext)
        appContext.setClearFilters(!appContext.clearFilters);
       }

    return <>
       <Title data-testid='title' content={APPLICATION_TITTLE} headerType={HeaderType.H1}/>
          <button data-testid='clear-button' style={{marginLeft: '15px'}} onClick={handleClearFilters}>Clear Filters and Sorters</button>
    </>

}
export default Header;