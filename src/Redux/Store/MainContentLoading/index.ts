import { combineReducers } from 'redux-loop'
import { LoopReducer, loop, Cmd } from 'redux-loop'
import { createSelector } from 'reselect'

import { RootState } from '../'
import * as SelectedExpansions from '../Settings/Expansions/Selected'

///////////
// STATE //
///////////

export type State = Readonly<boolean>
export const initialState = false

/////////////
// ACTIONS //
/////////////

export type Action = SelectedExpansions.Action

/////////////
// REDUCER //
/////////////

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    case SelectedExpansions.ActionTypes.FETCH_FROM_DB: {
      return true
    }

    case SelectedExpansions.ActionTypes.FETCH_FROM_DB_SUCCESS:
    case SelectedExpansions.ActionTypes.FETCH_FROM_DB_FAILURE: {
      return false
    }

    default: {
      return state
    }
  }
}

///////////////
// SELECTORS //
///////////////

const getIsLoading = (state: RootState) => state.MainContentLoading

export const selectors = {
  getIsLoading,
}