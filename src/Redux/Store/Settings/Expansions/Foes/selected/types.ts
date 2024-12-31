import { ActionsUnion } from '@martin_hotell/rex-tils'

import { actions } from './actions'

export type State = string[]

export enum ActionTypes {
  TOGGLE_FOE = 'Settings/Expansions/Foes/TOGGLE_FOE',
  SET_TO_DB = 'Settings/Expansions/Foes/SET_TO_DB',
  SET_TO_DB_SUCCESS = 'Settings/Expansions/Foes/SET_TO_DB_SUCCESS',
  SET_TO_DB_FAILURE = 'Settings/Expansions/Foes/SET_TO_DB_FAILURE',
  FETCH_FROM_DB = 'Settings/Expansions/Foes/FETCH_FROM_DB',
  FETCH_FROM_DB_SUCCESS = 'Settings/Expansions/Foes/FETCH_FROM_DB_SUCCESS',
  FETCH_FROM_DB_FAILURE = 'Settings/Expansions/Foes/FETCH_FROM_DB_FAILURE',
}

export type Action = ActionsUnion<typeof actions>

export type SelectedFoesStateSlice = {
  Settings: {
    Expansions: {
      Foes: {
        selected: string[]
      }
    }
  }
}