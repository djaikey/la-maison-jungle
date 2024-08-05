import { useState } from "react"
import '../Styles/QuestionFormulaire.css'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Entrez votre adresse e-mail')
   
    return (
        

        <div className="form" >

            <textarea className="text-area"
                value={inputValue}
                onChange={(e)=> setInputValue(e.target.value)}
            />
            <button className="form-button" onClick={()=> alert(inputValue)}>Envoyer 🚨</button>
        </div>

    )
}


export default QuestionForm 

/* Event*/


function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}