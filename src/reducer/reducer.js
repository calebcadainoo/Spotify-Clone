export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// REMOVE after finished developing...
	// token: 'BQB8iM8aboztmMHNDunU7cAT7ry6XIBPMkuzLxLxPbnJkkB28m-5gPgwtjrH7c9J39VM6EiTLnmtKk6mwOggpy0w4m5-ScRGQw4fvRnyKeGk6iOJAcZBePM12TAm_b2q95bf9VmyWTEbRXl3HLmaLvdTc4WN3wdAca-Wj7R5zttW3hLFs8fu',
}

const reducer = (state, action) => {
	console.log(action);

	// Action -> type, [payload]

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			}
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			}
		default:
			return state
	}
}

export default reducer