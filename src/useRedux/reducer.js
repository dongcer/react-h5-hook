
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_COLOR': {
      return {
        color: action.color
      };
    }
    case 'MINUS': {
      return {
        color: action.color
      };
    }
    default:
      return {}
  }
};
export default reducer