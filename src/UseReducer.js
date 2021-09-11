import React, {useReducer} from "react";
import './style.css';
import { NavLink } from "react-router-dom";

const reducer=(state, action)=>{
    if(action.type=="INCR"){
        state=state+1;
    }
    if(state>0 && action.type=="DECR"){
        state=state-1;
    }
    return state;

};
const UseReducer =() => {
    const InitialData = 24;
    const [state, dispatch] = useReducer(reducer,InitialData);
  return(
    <>
        <section id="reducer" className="text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto bg-reducer">
                        <p>{state}</p>
                        <nav className="navbar">
                            <div className="btn-group">
                                <button 
                                    className="btn-group__item" 
                                    onClick={() => dispatch({type:"INCR"})}>
                                    INCE 👌
                                </button>
                                <button 
                                    className="btn-group__item" 
                                    onClick={() => dispatch({type:"DECR"})}>
                                    DECR 👌
                                    {/* press windows&. for imoji */}
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    </>
  );

};
export default UseReducer;