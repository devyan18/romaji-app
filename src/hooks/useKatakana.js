import { useEffect, useState } from 'react'
import { katakanasGroup } from '../utils/katakanas'

const groupsMapping = Object.keys(katakanasGroup)

const useKatakana = () => {
  const [romaji, setRomaji] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('')

  const [groups, setGroups] = useState()

  const [currentKatakanasSelected, setCurrentKatakanasSelected] = useState([])

  const genRomaji = (group) => {
    const katakana = katakanasGroup[group]
    setCurrentKatakanasSelected(katakana.katakana)
    const newRomaji = katakana.romaji[Math.floor(Math.random() * katakana.romaji.length)]

    if (newRomaji === romaji) {
      genRomaji(group)
    } else {
      setRomaji(newRomaji)
      setSelectedGroup(group)
    }
  }

  useEffect(() => {
    setGroups(groupsMapping)
  }, [])

  useEffect(() => {
    if (!romaji && groups) {
      genRomaji(groups[0])
      setCurrentKatakanasSelected(katakanasGroup[groups[0]].katakana)
    }
  }, [groups])

  return { romaji, groups, genRomaji, katakanas: currentKatakanasSelected, selectedGroup }
}

export default useKatakana
