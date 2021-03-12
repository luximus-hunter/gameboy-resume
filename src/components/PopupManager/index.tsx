import './style.scss'

import { CSSProperties } from 'react'
import popupSprite from '../../assets/popup.png'
import popups from '../../data/popups.json'
import screens from '../../data/screens.json'

interface Props {
  active: string
}

interface Popup {
  name: string
  text: string[]
}

const PopupManager = ({ active }: Props) => {
  const style: CSSProperties = {
    display: active !== '' ? 'block' : 'none',
    backgroundImage: `url('${popupSprite}')`
  }

  let text: string[] = []

  popups.map((popup) => {
    if (popup.name === active) {
      text = [...popup.text]
    }
  })

  return (
    <section style={style} id='popup'>
      {text.map((n, i) => (
        <div key={i} className='popup-textline'>
          {n}
        </div>
      ))}
    </section>
  )
}

export default PopupManager
