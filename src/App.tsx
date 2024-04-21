import Layout from './layout/Layout'
import Card from './components/Card'
import { useHabilities } from './context/habilities'
import { useState, useEffect } from 'react'
import AbilityForm from './components/AbilityForm'
import ChakraSelector from './components/ChackraSelector'

function App() {
	const { abilities, chakra, baseChakra } = useHabilities()
	const [isRegisterOpen, setIsRegisterOpen] = useState(false)

	useEffect(() => {
		document.documentElement.style.setProperty('--doc-height', `${window.innerHeight}px`)
	}, [])

	if (isRegisterOpen)
		return (
			<main className='bg-gray-50'>
				<AbilityForm onCloseForm={() => setIsRegisterOpen(false)} />
			</main>
		)

	return (
		<Layout label={''} onClick={() => setIsRegisterOpen(!isRegisterOpen)}>
			<section className='pt-10 pb-4'>
				{baseChakra ? (
					<>
						<h2 className='text-lg font-medium pb-3'>
							Chakra: {Number.isInteger(chakra) ? chakra : chakra.toFixed(1)}
						</h2>
					</>
				) : (
					<ChakraSelector />
				)}

				{/* <div className='border border-solid border-gray-300 rounded-md'>barrrita</div> */}
			</section>

			<section className='grid gap-2'>
				{/* <h3 className='font-medium text-gray-600'>Habilidades</h3> */}
				<div className='grid gap-2'>
					{abilities.map((card) => (
						<Card {...card} key={card.title} />
					))}
				</div>
			</section>
		</Layout>
	)
}

export default App
