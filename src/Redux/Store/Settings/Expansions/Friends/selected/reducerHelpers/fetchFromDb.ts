import { loop, Cmd } from 'redux-loop'

import { State } from '../types'
import { initialState } from '../reducer'
import { actions } from '../actions'
import { getSelectedFriendsFromDB } from '../sideEffects'

export const fetchFromDb = (state: State) => {
  return loop(
    state,
    Cmd.run(getSelectedFriendsFromDB, {
      successActionCreator: actions.fetchFromDBSuccessful,
      failActionCreator: actions.fetchFromDBFailed,
    })
  )
}

export const fetchFromDbSuccess = (
  _: State,
  action: ReturnType<typeof actions.fetchFromDBSuccessful>
) => {
  if (Array.isArray(action.payload)) {
    return action.payload
  }
  return initialState
}
