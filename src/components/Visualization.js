import React from 'react'

export default (props) => {
  const {
    vizMode
  } = props
  return (
    <div id="output">
      <Controls vizMode={vizMode} />
    </div>
  )
}

const Controls = (props) => {
  const {
    vizMode
  } = props
  const onChange = ev => vizMode(ev.target.value)
  return (
    <div className="controls">
      <select id="visualization-select" onChange={onChange}>
        <option value="expansion">expansion</option>
        <option value="distribution">distribution</option>
      </select>
    </div>
  )
}
