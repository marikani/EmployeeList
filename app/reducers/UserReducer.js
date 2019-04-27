const initialState = {
  email: '',
  password: '',
  employeeData: null
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      state = {
        ...state,
        email: action.payload
      }
      break;
    case 'SET_PASSWORD':
      state = {
        ...state,
        password: action.payload
      }
      break;
    case "GET_EMP_DETAIL":
      state = {
        ...state,
        employeeData: action.payload
      }
      break;
  }
  return state
}

export default UserReducer;