import { createContext, useState } from "react";


export const BeataContext = createContext()


const BeataContextProvider = ({children}) => {

    const [todoList, setTodoList] = useState([])

    const addToTodoListItem = (text) => {
        setTodoList([...todoList, text])
    }

    return <BeataContext.Provider
        value={{
            todoList: todoList,
            addToTodoListItem: addToTodoListItem
        }}
    >
        {children} 
    </BeataContext.Provider>

}

export default BeataContextProvider