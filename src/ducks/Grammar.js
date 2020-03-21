import {makeActionCreator, makeReducer} from 'redux-toolbelt'
import {REHYDRATE} from 'redux-persist'
import {always, assoc, evolve} from 'ramda'
import tracery from 'tracery-grammar'
// Initialize
const INITIAL_STATE = {
  generateCount: 1,
  mode: undefined,
  grammar: null,
  seedLocked: false,
  output: '',
  vizMode: 'expansion',
  raw: '',
}
// Symbols
const GENERATE = 'GENERATE'
const GENERATE_COUNT = 'GENERATE_COUNT'
const MODE = 'MODE'
const VIZ_MODE = 'VIZ_MODE'
const RAW = 'RAW'
// Actions
export const generate = makeActionCreator(GENERATE)
export const generateCount = makeActionCreator(GENERATE_COUNT)
export const mode = makeActionCreator(MODE)
export const vizMode = makeActionCreator(VIZ_MODE)
export const raw = makeActionCreator(RAW)
// Reducer
const ACTION_MAP = {
  [GENERATE]: (state, {payload}) => state,
  [GENERATE_COUNT]: (_state, {payload}) => assoc('generateCount', payload.generateCount),
  [REHYDRATE]: evolve({
    grammar: () => {
      const grammar = tracery.createGrammar();
      grammar.addModifiers(tracery.baseEngModifiers)
      return grammar
    },
    mode: always('authoring'),
  }),
  [MODE]: (state, {payload}) => assoc('mode', payload.mode, state),
  [VIZ_MODE]: (state, {payload}) => assoc('vizMode', payload.vizMode, state),
}
export default makeReducer(ACTION_MAP, {defaultState: INITIAL_STATE})
