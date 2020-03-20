import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {compose, mapObjIndexed, path} from 'ramda'
import * as actions from '../ducks/Grammar'

export default () => {
  const dispatch = useDispatch()
  const grammar = useSelector(path(['Grammar', 'grammar']))
  const output = useSelector(path(['Grammar', 'output']))
  const generateCount = useSelector(path(['Grammar', 'generateCount']))
  const mode = useSelector(path(['Grammar', 'mode']))

  const dispatchedActions = mapObjIndexed(action => compose(dispatch, action), actions)

  return (
    <div />
  )
}
