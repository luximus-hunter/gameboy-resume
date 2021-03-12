import './style.scss'

import { CSSProperties, Fragment } from 'react'

import { Possition } from '../../App'
import Tile from './Tile'
import json from '../../data/screens.json'

interface Props {
  possition: Possition
}

const ScreenManager = ({ possition }: Props) => {
  const scale = 4
  const sprite = 16

  const width = 320
  const height = 320

  const style: CSSProperties = {
    top: (possition.Y - 1) * height * -1,
    left: (possition.X - 1) * width * -1
  }

  return (
    <div className='screens' style={style}>
      {json.map((screenArrArr, i) => (
        <div key={i} className='screens-row'>
          {screenArrArr.map((screenArr, j) => (
            <Fragment key={j}>
              <div className='screen-container'>
                <section className='screen' id={`screen-${screenArr.X}-${screenArr.Y}`}>
                  {screenArr.tiles.map((tileNoArr, k) => (
                    <div key={k} className='screen-row'>
                      {tileNoArr.map((tileNo, l) => (
                        <Tile
                          key={l}
                          type='tile'
                          size={sprite}
                          scale={scale}
                          spriteIndex={tileNo}
                        />
                      ))}
                    </div>
                  ))}
                </section>
                <section
                  className='screen-sprites'
                  id={`screen-${screenArr.X}-${screenArr.Y}-sprites`}
                >
                  {screenArr.sprites.map((spriteNoArr, k) => (
                    <div key={k} className='screen-row'>
                      {spriteNoArr.map((spriteNo, l) => (
                        <Tile
                          key={l}
                          type='sprite'
                          size={sprite}
                          scale={scale}
                          spriteIndex={spriteNo}
                        />
                      ))}
                    </div>
                  ))}
                </section>
              </div>
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ScreenManager
