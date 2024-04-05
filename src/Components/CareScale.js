import Sun from '../Assets/Sun.png'
import Water from'../Assets/Water.png'
import '../Styles/PlantItem.css'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' className='lmj-care-type'/>
		) : (
			<img src={Water} alt='water-icon' className='lmj-care-type'/>
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale