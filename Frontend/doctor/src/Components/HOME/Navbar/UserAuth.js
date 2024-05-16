import React, { useContext, useState } from 'react'
const auth = React.createContext()
export const UserAuth = (props) => {
    const [userName, setUserName] = useState()
    const [submitRender,setsubmitRender]=useState(true)
    const login = (name) => {
        setUserName(name)
    }
    const logout = () => {
        setUserName('')
    }
    return (
        <div>
            <auth.Provider value={{ userName, setUserName,login,logout ,submitRender,setsubmitRender}}>
                {props.children}
            </auth.Provider>
        </div>
    )
}
export  default function Authuse() {
    return useContext(auth)
}