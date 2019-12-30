
const initialState = {
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
     case 'TOGGLE_LOADER':
      return {
        ...state,
        loading: !state.loading
      }
     default:
      return state
    }
}