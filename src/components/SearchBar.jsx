import { StyledSSearchBar } from "./styled"
import { AppContext } from "../App"
import { useContext } from "react"

export default function SearchBar(){
    const {searchTerm, handleInputChange} = useContext(AppContext);

    // const handleChange=(e)=>{
    //     setSearchTerm(e.target.value)
    //     console.log(e.target.value)
    // }

    return <StyledSSearchBar
     onChange={handleInputChange}
      value={searchTerm}
       type="text"/>
}