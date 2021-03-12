import Houzing from './components/Housing'
import PopupManager from './components/PopupManager'
import ScreenManager from './components/ScreenManager'
import screens from './data/screens.json'
import { useState } from 'react'

export type Dir = 'u' | 'l' | 'r' | 'd'
type Btn = 'a' | 'b'

export interface Possition {
  X: number
  Y: number
}

export interface Actions {
  updatePossition: (dir: Dir) => void
  getPossition: () => Possition
  buttonPress: (btn: Btn) => void
}

function App() {
  const [loaded, setLoaded] = useState(false)

  const possitionInit: Possition = { X: 3, Y: 3 }
  const [possition, setPossition] = useState(possitionInit)

  const [active, setActive] = useState('')

  const updatePossition = (dir: Dir) => {
    const possitionNew = { ...possition }

    screens.map((n) => {
      n.map((m) => {
        if (m.X === possition.X && m.Y === possition.Y) {
          m.goto.map((o) => {
            if (o === dir) {
              switch (dir) {
                case 'u':
                  possitionNew.Y = possitionNew.Y - 1
                  break
                case 'l':
                  possitionNew.X = possitionNew.X - 1
                  break
                case 'r':
                  possitionNew.X = possitionNew.X + 1
                  break
                case 'd':
                  possitionNew.Y = possitionNew.Y + 1
                  break
                default:
                  console.error('invalid direction of movement')
                  break
              }
            }
            return o
          })
        }
        return m
      })
      return n
    })

    setPossition(possitionNew)
  }

  const getPossition = () => possition

  const buttonPress = (btn: Btn) => {
    switch (btn) {
      case 'a':
        screens.map((screenRow, i) => {
          screenRow.map((screen, j) => {
            if (active === '') {
              //* Open popup
              if (screen.X === possition.X && screen.Y === possition.Y && screen.dialog) {
                setActive(screen.dialog)
              }
            } else {
              //! Open full dialog
              if (active === screen.dialog) {
                console.log('open full dialog for ' + screen.dialog)
              }
            }
          })
        })
        break
      case 'b':
        if (active !== '') {
          //* Close popup
          setActive('')
        } else {
          //! Open full dialog
        }
        break
      default:
        console.error('invalid direction of movement')
        return
    }
  }

  const actions: Actions = {
    updatePossition,
    getPossition,
    buttonPress
  }

  // const KeyPress = (e: KeyboardEvent) => {
  //   console.log('handle key ' + e.key)

  //   const getEl = (id: string) => document.getElementById(id) as HTMLElement

  //   switch (e.code) {
  //     case 'ArrowUp':
  //     case 'KeyW':
  //       getEl('btn-up').click()
  //       break
  //     case 'ArrowLeft':
  //     case 'KeyA':
  //       getEl('btn-left').click()
  //       break
  //     case 'ArrowRight':
  //     case 'KeyD':
  //       getEl('btn-right').click()
  //       break
  //     case 'ArrowDown':
  //     case 'KeyS':
  //       getEl('btn-down').click()
  //       break
  //   }
  // }

  if (!loaded) {
    // if (!document.onkeydown) {
    //   document.addEventListener('keydown', KeyPress)
    // }

    setLoaded(true)
  }

  return (
    <Houzing actions={actions}>
      <ScreenManager possition={possition} />
      <PopupManager active={active} />
    </Houzing>
  )
}

export default App
