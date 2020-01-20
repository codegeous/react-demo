export const profileData = data => dispatch => {
  dispatch({
    type: "PROFILE_DATA",
    data
  });
};

export const showLoader = () => dispatch => {
  dispatch({
    type: "SHOW_LOADER"
  })
}

export const hideLoader = () => dispatch => {
  dispatch({
    type: "HIDE_LOADER"
  })
}
