import { Fragment } from "react";
import { MdContentPasteSearch } from "react-icons/md";

import PropTypes from "prop-types";




export default function SearchingBar({SetSearched}){
    


    return(
        <Fragment>
            <div className=' flex mt-6 rounded-full'>

                <input className='w-full p-2 text-black rounded-l-full' type='text' onChange={(e)=>{SetSearched(e.target.value)}}/>
                <MdContentPasteSearch size={40} color='black' 
                className='bg-gray-400 rounded-r-full w-24 '/>
            
            </div>
        </Fragment>
    )
}

SearchingBar.propTypes = {
    searched: PropTypes.string,
    SetSearched: PropTypes.func,
    serverUrl:PropTypes.string
  };