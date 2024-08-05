import { useState } from 'react'
import '../Styles/Footer.css'
import QuestionForm from './QuestionForm'



function Footer() {
	const [inputValue, setInputValue] = useState('entrer votre email ici')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div><QuestionForm></QuestionForm></div>
         
		</footer>
	)
}

export default Footer