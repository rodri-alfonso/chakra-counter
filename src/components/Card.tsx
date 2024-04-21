import { setAbilitiesStorage, setChakraStorage } from '../utils/store'
import { useHabilities } from '../context/habilities'

interface Props {
	title: string
	description: string
	chakra: number
}

export default function Card({ chakra, description, title }: Props) {
	const { setAbilitiesList, setChakra, chakra: totalChakra } = useHabilities()

	function handleDeleteFromStorage() {
		const abilities = JSON.parse(localStorage.getItem('abilities') || '[]')
		const newAbilities = abilities.filter((ability: any) => ability.title !== title)
		setAbilitiesList(newAbilities)
		setAbilitiesStorage(newAbilities)
	}

	function handleUpdateChakraFromStorage() {
		setChakra(totalChakra - chakra)
		setChakraStorage(totalChakra - chakra)
	}

	return (
		<article className='bg-white shadow-2xl border border-solid border-gray-200 rounded-lg p-3 px-4 relative'>
			<header className='flex items-center gap-10'>
				<div className='w-full'>
					<h2 className='font-medium'>{title}</h2>
					{/* <p className='text-sm text-gray-400 w-full max-w-10 text-ellipsis text-wrap'>{description}</p> */}
				</div>
			</header>
			<section className='flex items-center justify-between'>
				{/* <span>{chakra}</span> */}
				<span></span>
				<div className='flex items-center gap-2'>
					<button
						className='active:scale-95 transition-all p-0.5 rounded-full text-gray-400 border border-solid border-gray-400 absolute top-2 right-2'
						onClick={handleDeleteFromStorage}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width='16'
							height='16'
							color='currentColor'
							fill='none'
						>
							<path
								d='M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999'
								stroke='currentColor'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>
					<button
						className='active:scale-95 transition-all mt-4 bg-gray-800 p-1 px-2 pl-3 rounded-md text-white flex items-center gap-0.5'
						onClick={handleUpdateChakraFromStorage}
					>
						<span>{chakra}</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							width={22}
							height={22}
							color={'currentColor'}
							fill={'none'}
						>
							<path
								d='M6.19351 11.3965L12.192 3.31186C12.6611 2.67957 13.5405 3.07311 13.5405 3.91536V10.1729C13.5405 10.6775 13.8853 11.0865 14.3107 11.0865H17.2283C17.891 11.0865 18.2443 12.0134 17.8065 12.6035L11.808 20.6881C11.3389 21.3204 10.4595 20.9269 10.4595 20.0846V13.8271C10.4595 13.3225 10.1147 12.9135 9.68931 12.9135H6.77173C6.10895 12.9135 5.75566 11.9866 6.19351 11.3965Z'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
			</section>
		</article>
	)
}
