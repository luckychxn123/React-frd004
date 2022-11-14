import { useState } from "react"
import Loginstyles from '../css/toDoList.module.css'
import { loginAction } from '../reduxFRD006/auth/action'
import { useDispatch } from 'react-redux'

import { login, UserType } from '../reduxFRD005/sliceMethod/slice'

export default function Login() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState<string>('lucky')
    const [password, setPassword] = useState<string>('123')


    // if logged in success, app.tsx shows <ToDoList/>. 
    //Since its shared between files, need reduxState => not useState
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (username == 'lucky' && password == '123') {
            //login success
            dispatch(loginAction(true));
            dispatch(login({
                firstname: 'lucky',
                lastname: 'chan',
                age: 22,
                image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Mr_Wiggles_7-20-07_%28870844637%29.jpg'
            } as UserType)) //dispatch slice
        } else {
            // login fail
            dispatch(loginAction(false))
        }
    }


    return (<div className={Loginstyles.loginsection}>
        <form onSubmit={onSubmit}>
            <label> username:
                <input value={username} onChange={(e) => { setUsername(e.target.value) }}>
                </input>
            </label><br />
            <label> password:
                <input value={password} onChange={(e) => { setPassword(e.target.value) }}>
                </input>
            </label><br />
            <button type="submit">Submit</button>
        </form>
        <button>clear</button>
    </div>)

}
