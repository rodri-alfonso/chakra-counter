import { Ability } from '../context/types'

export const setAbilitiesStorage = (abilities: Ability[]) => {
	localStorage.setItem('abilities', JSON.stringify(abilities))
}

export const getHabilitiesStorage = (): Ability[] => {
	const abilities = localStorage.getItem('abilities')
	return abilities ? JSON.parse(abilities) : []
}

export const setChakraStorage = (chakra: number) => {
	localStorage.setItem('chakra', JSON.stringify(chakra))
}

export const getChakraStorage = (): number => {
	const chakra = localStorage.getItem('chakra')
	return chakra ? JSON.parse(chakra) : 0
}

export const setBaseChakra = (chakra: number) => {
	localStorage.setItem('baseChakra', JSON.stringify(chakra))
}

export const getBaseChakra = (): number => {
	const chakra = localStorage.getItem('baseChakra')
	return chakra ? JSON.parse(chakra) : 0
}
