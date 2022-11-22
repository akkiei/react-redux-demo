import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux';


const Header  = () =>{
    const counter = useSelector((state) => state.counter); 
    const dispatch = useDispatch()

    const [count,setCount] = useState(counter)

    const handleChange = () =>{

            dispatch({
                type: "INCREMENT"
            })
            setCount(counter)
    }

    return (<div>
            <h3>Counter in header is : {count}</h3>
            <button onClick={handleChange}>Change</button>
    </div>)


}

export default Header;