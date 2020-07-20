import { UPDATE_GRAPHQL_UTILS } from '../actions/main'

const INITIAL_STATE = {
  graphqlUtils: 'ABC'
}

const graphqlUtils = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_GRAPHQL_UTILS:
      return { ...state }

    default:
      return state
  }
}

export default graphqlUtils
