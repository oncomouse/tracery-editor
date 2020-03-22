import React from 'react'
import {__, assoc, compose} from 'ramda'

export default (props) => {
  const {
    actions,
    seedLock,
  } = props
  return (
    <div className="controls">
      <OriginSelect />
      <GenerateCount generateCount={
        compose(actions.generate, actions.generateCount, assoc('count', __, {}))
      } />
      <Button text="reroll" onClick={() => seedLock ? compose(actions.generateCount, actions.seedLock)() : actions.generateCount()} />
      <Button text="step" />
      <GenSeed />
      <GenSeedLock />
    </div>
  )
}
const OriginSelect = (props) => (
  <select id="origin-select">
  </select>
)
const GenerateCount = ({generateCount}) => (
  <select id="genrate-count" onChange={ev => generateCount(parseInt(ev.target.value, 10))}>
    {[1, 2, 3, 4, 5, 7, 10, 15, 20, 30, 60, 100].map(number => (
      <option value={number} key={number}>{number}</option>
    ))}
  </select>
)

const Button = ({onClick, className = '', text}) => (
  <button onClick={onClick} className={className}>{text}</button>
)

const GenSeed = ({onChange, seed}) => (
  <div id="gen-seed" contentEditable={true} onChange={onChange}>{seed}</div>
)

const GenSeedLock = ({onClick, locked}) => (
  <div id="gen-seed-lock" onClick={onClick} className={locked ? 'locked' : null} />
)
