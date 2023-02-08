import useKatakana from './hooks/useKatakana'
import './App.css'
import { useState } from 'react'

function App () {
  const [view, setView] = useState(true)
  const { romaji, groups, genRomaji, katakanas, selectedGroup } = useKatakana()

  return (
    <div className='App'>
      {romaji && (
        <div className='romaji'>
          <h1>{romaji}</h1>
        </div>
      )}

      <div className='groups'>
        {groups?.map((group, index) => (
          <button
            key={index}
            onClick={() => genRomaji(group)}
            className={selectedGroup === group ? 'active' : ''}
          >
            {group}
          </button>
        ))}
      </div>
      <div className='actions'>
        <form onSubmit={(e) => {
          e.preventDefault()
          genRomaji(selectedGroup)
        }}
        >

          <button className='viewBtn' type='submit' autoFocus>
            Generate
          </button>
        </form>
        <button className='viewBtn' onClick={() => setView(!view)}>
          View
        </button>
      </div>
      {view && (
        <div className='katakanas'>
          {katakanas?.map((katakana, index) => (
            <span key={index}>{katakana}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
