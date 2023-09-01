import { useContext, useState } from "react"
import Button from "./InputButton/Button"
import InputText from "./InputText"
import { BeataContext } from "../context/BeataContext"


const AddTodoItem = () => {

    const [text, setText] = useState()
    const {addToTodoListItem} = useContext(BeataContext)

    return <div>
        <InputText onChange={(e) => {
                setText(e.target.value)
            }}
            placeholder="Skriv något här"
        />
        <Button
            buttonText="Spara"
            buttonColor="red"
            onClick={() => {
                addToTodoListItem(text)
            }}
        />
        <p>{text}</p>
    </div>
}

export default AddTodoItem