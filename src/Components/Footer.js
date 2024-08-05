import { useState } from 'react'
import '../Styles/Footer.css'



function Footer() {
	const [inputValue, setInputValue] = useState('entrer votre email ici')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
         
		</footer>
	)
}

export default Footer