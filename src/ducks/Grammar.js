import {makeActionCreator, makeReducer} from 'redux-toolbelt'
import {REHYDRATE} from 'redux-persist'
import {assoc} from 'ramda'
// Initialize
const INITIAL_STATE = {
  generateCount: 1,
  mode: undefined,
  grammar: {},
  seedLocked: false,
  output: '',
  vizMode: 'expansion',
}
// Symbols
const GENERATE = 'GENERATE'
const GENERATE_COUNT = 'GENERATE_COUNT'
const MODE = 'MODE'
const VIZ_MODE = 'VIZ_MODE'
// Actions
export const generate = makeActionCreator(GENERATE)
export const generateCount = makeActionCreator(GENERATE_COUNT)
export const mode = makeActionCreator(MODE)
export const vizMode = makeActionCreator(VIZ_MODE)
// Reducer
const ACTION_MAP = {
  [GENERATE]: (state, {payload}) => state,
  [GENERATE_COUNT]: (_state, {payload}) => assoc('generateCount', payload.generateCount),
  [REHYDRATE]: assoc('mode', 'authoring'),
  [MODE]: (_state, {payload}) => assoc('mode', payload.mode),
  [VIZ_MODE]: (_state, {payload}) => assoc('vizMode', payload.vizMode),
}
export default makeReducer(ACTION_MAP, {defaultState: INITIAL_STATE})
