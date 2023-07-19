import { useContext } from "react";
import { APPLICATION_TITTLE } from "../../utils/constants";
import { HeaderType } from "./Title/title.types";
import { Context, IInitialContext } from "../../App";
import Title from './Title/title'

const Header = (): JSX.Element => {
    const appContext = useContext<IInitialContext>(Context);

    const handleClearFilters = () =>{
        console.log(appContext)
        appContext.setClearFilters(!appContext.clearFilters);
       }

    return <>
       <Title content={APPLICATION_TITTLE} headerType={HeaderType.H1}/>
          <button style={{marginLeft: '15px'}} onClick={handleClearFilters}>Clear Filters and Sorters</button>
    </>

}
export default Header;