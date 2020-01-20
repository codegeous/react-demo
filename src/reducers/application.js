const initialState = {
  data: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_DATA":
      return {
        ...state,
        data: { ...action.data }
      };

    case "SHOW_LOADER":
        return { ...state, loading: true };

    case "HIDE_LOADER":
      return { ...state, loading: false };

    default:
      return state;
  }
};
