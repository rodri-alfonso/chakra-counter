import { setChakraStorage } from '../utils/store'
import { useHabilities } from '../context/habilities'

interface Props {
	children: React.ReactNode | React.ReactNode[]
	label?: string
	onClick?: () => void
}

export default function Layout({ children, onClick }: Props) {
	const { setChakra, baseChakra } = useHabilities()

	function handleUpdateChakra() {
		setChakra(baseChakra)
		setChakraStorage(baseChakra)
	}

	return (
		<main className='bg-gray-100 h-[var(--doc-height)] p-4'>
			<header className='flex items-center justify-between'>
				<button
					className='grid place-items-center  rounded-md p-1 border border-solid border-gray-600 text-gray-600 active:scale-95 transition-all'
					onClick={handleUpdateChakra}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width='24'
						height='24'
						color='currentColor'
						fill='none'
					>
						<path
							d='M15.1667 0.999756L15.7646 2.11753C16.1689 2.87322 16.371 3.25107 16.2374 3.41289C16.1037 3.57471 15.6635 3.44402 14.7831 3.18264C13.9029 2.92131 12.9684 2.78071 12 2.78071C6.75329 2.78071 2.5 6.90822 2.5 11.9998C2.5 13.6789 2.96262 15.2533 3.77093 16.6093M8.83333 22.9998L8.23536 21.882C7.83108 21.1263 7.62894 20.7484 7.7626 20.5866C7.89627 20.4248 8.33649 20.5555 9.21689 20.8169C10.0971 21.0782 11.0316 21.2188 12 21.2188C17.2467 21.2188 21.5 17.0913 21.5 11.9998C21.5 10.3206 21.0374 8.74623 20.2291 7.39023'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
				<button
					className='grid place-items-center bg-gray-800 rounded-md p-1 text-white active:scale-95 transition-all'
					onClick={onClick}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						width='24'
						height='24'
						color='currentColor'
						fill='none'
					>
						<path
							d='M12 4V20M20 12H4'
							stroke='currentColor'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</header>
			{children}
		</main>
	)
}
