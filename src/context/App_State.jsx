import React from 'react'
import { AppContext } from "./App_Context";
import axios from 'axios'

const App_State = (props) => {

  //Login 
  const login = async(gmail,password) =>{
    const url ="http://localhost:3000/api";
    const api = await axios.post(`${url}/login`,{
      gmail,password
    })
  }
  return (
    <AppContext.Provider value={{

    }}>
        {props.children}
    </AppContext.Provider>
  )
}

export default App_State