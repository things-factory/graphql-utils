import { store } from '@things-factory/shell'
import graphqlUtils from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    graphqlUtils
  })
}
