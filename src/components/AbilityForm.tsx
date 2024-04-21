import { useState } from 'react'
import { useHabilities } from '../context/habilities'

interface Props {
	onCloseForm?: () => void
}

interface PropsComponent {
	children: React.ReactNode | React.ReactNode[]
}

const FormBox = ({ children }: PropsComponent) => {
	return <div className='grid gap-1'>{children}</div>
}

export default function AbilityForm({ onCloseForm = () => {} }: Props) {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [chakra, setChakra] = useState(0)
	const { setNewAbility } = useHabilities()

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		// console.log({ title, description, chakra })
		setNewAbility({ title, description, chakra })
		onCloseForm()
	}

	return (
		<form onSubmit={handleSubmit} className='h-[var(--doc-height)] grid p-4 content-between'>
			<section className='grid gap-14 place-items-center '>
				<h2 className='font-medium text-lg'>Nueva habilidad</h2>
				<div className='grid gap-6 w-full'>
					<FormBox>
						<label htmlFor='' className='font-medium text-sm text-gray-700'>
							Nombre
						</label>
						<input
							type='text'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder='Escribí un nombre...'
							className='border border-solid border-gray-400 rounded-md p-1 px-2 w-full'
						/>
					</FormBox>
					<FormBox>
						<label htmlFor='' className='font-medium text-sm text-gray-700'>
							Description
						</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder='Escribí una description...'
							className='border border-solid border-gray-400 rounded-md p-1 px-2 w-full'
						/>
					</FormBox>
					<FormBox>
						<label htmlFor='' className='font-medium text-sm text-gray-700'>
							Chakra
						</label>
						<input
							type='number'
							accept='number'
							min={0}
							step='any'
							value={chakra}
							onChange={(e) => setChakra(Number(e.target.value))}
							placeholder='Escribí el chakra...'
							className='border border-solid border-gray-400 rounded-md p-1 px-2 w-full'
						/>
					</FormBox>
				</div>
			</section>

			<div className='grid gap-2 w-full'>
				<button
					className=' bg-gray-800 rounded-md py-2 px-3 text-white disabled:opacity-50 disabled:cursor-not-allowed'
					disabled={!title || !description || !chakra}
				>
					Crear
				</button>
				<button
					type='button'
					className='rounded-md py-2 px-3 mt-auto text-gray-800 disabled:opacity-50 border border-solid border-gray-800 hover:bg-gray-800 hover:text-white '
					onClick={onCloseForm}
				>
					Cancelar
				</button>
			</div>
		</form>
	)
}
