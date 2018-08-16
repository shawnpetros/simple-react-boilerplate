export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return state + 1
    case 'DECREASE_COUNT':
      return state - 1
    default:
      return state
  }
}
