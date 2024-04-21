import { useReducer, createContext, useContext } from 'react'
import type { Ability } from './types'
import {
	setAbilitiesStorage,
	getHabilitiesStorage,
	getChakraStorage,
	setChakraStorage,
	getBaseChakra,
} from '../utils/store'

const SET_NEW_ABILITY = 'SET_NEW_ABILITY'
const SET_ABILITIES_LIST = 'SET_ABILITIES_LIST'
const SET_CHAKRA = 'SET_CHAKRA'
const SET_BASE_CHAKRA = 'SET_BASE_CHAKRA'

interface State {
	chakra: number
	abilities: Ability[]
	baseChakra: number
}

const initialState: State = {
	chakra: getChakraStorage() || getBaseChakra(),
	abilities: getHabilitiesStorage(),
	baseChakra: getBaseChakra(),
}

function avatarReducer(state: State, action: any): State {
	switch (action.type) {
		case SET_NEW_ABILITY:
			return { ...state, abilities: [...state.abilities, action.payload] }
		case SET_ABILITIES_LIST:
			return { ...state, abilities: action.payload }
		case SET_CHAKRA:
			return { ...state, chakra: action.payload }
		case SET_BASE_CHAKRA:
			return { ...state, baseChakra: action.payload }
		default:
			return state
	}
}

const AbilitiesContext = createContext<{ state: State; dispatch: React.Dispatch<any> }>({
	state: initialState,
	dispatch: () => null,
})

const AbilitiesProvider = ({ children }: any): JSX.Element => {
	const [state, dispatch] = useReducer(avatarReducer, initialState)
	const value = { state, dispatch }

	return <AbilitiesContext.Provider value={value}> {children} </AbilitiesContext.Provider>
}

function useHabilities() {
	const {
		state: { abilities, chakra, baseChakra },
		dispatch,
	} = useContext(AbilitiesContext)

	const setNewAbility = (ability: Ability) => {
		dispatch({ type: SET_NEW_ABILITY, payload: ability })
		setAbilitiesStorage([...abilities, ability])
	}

	const setAbilitiesList = (abilities: Ability[]) => {
		dispatch({ type: SET_ABILITIES_LIST, payload: abilities })
		setAbilitiesStorage(abilities)
	}

	const setChakra = (chakra: number) => {
		dispatch({ type: SET_CHAKRA, payload: chakra })
		setChakraStorage(chakra)
	}

	const setBaseChakra = (chakra: number) => {
		dispatch({ type: SET_BASE_CHAKRA, payload: chakra })
		setBaseChakra(chakra)
	}

	return { abilities, chakra, baseChakra, setNewAbility, setAbilitiesList, setChakra, setBaseChakra }
}

export { AbilitiesProvider, useHabilities }
