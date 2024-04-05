import { useState } from 'react'
import '../Styles/Footer.css'

/*function checkValue(value) {
    if (!value.includes('@')) {
        setInputValue(value)
    }
}*/

function Footer() {
	const [inputValue, setInputValue] = useState('entrer votre email ici')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :<span> <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            /></span></div>
            
            
		</footer>
	)
}

export default Footer