import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {compose, mapObjIndexed, path} from 'ramda'
import * as actions from '../ducks/Grammar'
import Title from '../components/Title'
import EditorControls from '../components/EditorControls'
import Extras from '../components/Extras'
import Editor from '../components/Editor'
import Errors from '../components/Errors'
import Visualization from '../components/Visualization'
import OutputControls from '../components/OutputControls'
import Output from '../components/Output'
import '../page.css'
import '../tracery-vis.css'

export default () => {
  const dispatch = useDispatch()
  const grammar = useSelector(path(['Grammar', 'grammar']))
  const output = useSelector(path(['Grammar', 'output']))
  const generateCount = useSelector(path(['Grammar', 'generateCount']))
  const mode = useSelector(path(['Grammar', 'mode']))
  const vizMode = useSelector(path(['Grammar', 'vizMode']))

  const dispatchedActions = mapObjIndexed(action => compose(dispatch, action), actions)

  return (
    <div id="main-col">
      <div id="edit-col" className="col">
        <div id="grammar" className="content-box">
          <div className="content-header">
            <Title />
            <EditorControls />
            <Extras />
          </div>
          <div className="content">
            <Editor />
          </div>
        </div>
      </div>
      <div id="content-col" className="col">
        <Errors />
        <div id="output" className="content-box">
          <Visualization />
          <div className="content-header">
            <div></div>
            <OutputControls />
          </div>
          <div className="content">
            <Output />
          </div>
        </div>
      </div>
    </div>
  )
}
