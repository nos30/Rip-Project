import { ActionReducer, MetaReducer, createReducer, on } from '@ngrx/store'
import { User } from 'src/app/models/user.model'
import { initLogin, resetLogin, updateUser } from './login.actions'

const loginInitialState = {
  user: {
    id: '',
    username: '',
  },
}

function log(actionReducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const currentState = actionReducer(state, action)
    console.groupCollapsed(action.type)
    console.log('before : ', state)
    console.log('after :', currentState)
    console.groupEnd()
    return currentState
  }
}

export const loginMetaReducers: MetaReducer[] = [log]

export const loginReducer = createReducer(
  loginInitialState,
//   ? --- Init Login
  on(initLogin, (state) => state),
//   ? --- Reset Login
  on(resetLogin, (state) => loginInitialState),
//   ? --- Update User
  on(updateUser, (state, props) => {
    return {
      ...state,
      user: props.user,
    }
  }),

)
