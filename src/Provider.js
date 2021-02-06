import React,{useState} from 'react';
import Mycontext from './Context';

const Provider = props => {
    const [mission] = useState({ mname: "Go to US" , agent : 'aj'});

    return(
        <Mycontext.Provider value={{data:mission}}>
            {props.children}
        </Mycontext.Provider>
    )
}
export default Provider;