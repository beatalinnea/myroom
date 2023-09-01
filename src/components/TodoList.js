import { useContext, useEffect } from "react"
import { BeataContext } from "../context/BeataContext"


const TodoList = () => {

    const { todoList } = useContext(BeataContext);

    useEffect(() => {
        alert(todoList.length)
    },[todoList])

    return <ul>
        {todoList.map(item => <li>{ item }</li>)}
    </ul>
}

export default TodoList