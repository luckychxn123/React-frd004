import Todoitem from "./ToDoItem"
import { useSelector } from 'react-redux';
import { ITodoItemState } from '../reduxFRD005/state'
import { increment } from '../reduxFRD005/action'
import { loginAction } from '../reduxFRD006/auth/action'

import { useEffect, useState } from "react";
import Liststyles from '../css/toDoList.module.css'
import { useDispatch } from 'react-redux';
import { saveToLocalStorage, getInitialStateFromLocalStorage } from "../reduxFRD005/reducers";
import Button from 'react-bootstrap/Button';

export function Todolist() {
    const dispatch = useDispatch()
    const [text, setText] = useState<string>('text')
    const allStates = useSelector((state: any) => state)
    const itemState = allStates['toDoItemProducer005'] //state is * of reducers' init according to state.ts
    const items = itemState.items
    // const isLoggedIn = useSelector((state: any) => state['authx'].isLoggedIn)
    const itemsProfile = allStates['userslicex']


    const updateText = (value: string) => {
        setText(value)
    }

    let setLogOut = () => {
        dispatch(loginAction(false))
    }

    const getDoneTask = () => {
        // let donetaskAmount: Array<'any'> = items.filter((i: { name: string, count: number, index: number }) => i.count >= 1
        // ) //below is also ok
        let donetaskAmount: ITodoItemState = items.filter((i: any) => i.count >= 1)//[previous] problem: length forever = 1
        let FinalDoneTaskAmount: any = donetaskAmount //if without everything still run but TS will scold me
        return FinalDoneTaskAmount.length
    }

    const enterfunc = (event: any) => {
        // check if keydown is enter
        if (event.key === 'Enter') {
            dispatch(increment(text))
        }
    }

    function SliceLogin(itemsProfile: any) {
        console.log('slice login component with {}')
        return (
            <div>
                <div>firstname: {itemsProfile.firstname}</div>
                <div>lastname: {itemsProfile.lastname}</div>
                <div>age: {itemsProfile.age}</div>
                <img src={itemsProfile.image} width="180" height="180" />
                <div className={Liststyles.newline}></div>
            </div>
        )
    }


    useEffect(() => {
        saveToLocalStorage(itemState)
    }, [items])

    return (
        <div className={Liststyles.listsection}>To Do list
            <div className={Liststyles.newline}></div>
            <Button variant="outline-success" onClick={() => { setLogOut() }}>Log out</Button>{' '}
            <div className={Liststyles.newline}>Count of total task: <span>{items.length}</span></div>
            <div className={Liststyles.newline}>Count of done task:  <span>{getDoneTask()}</span></div>
            <div className={Liststyles.newline}> <input value={text} onChange={(e) => { updateText(e.target.value) }} onKeyDown={enterfunc} />
            </div>
            <div>
                {SliceLogin(itemsProfile)}
                <Todoitem />
            </div>
        </div>
    )
}
