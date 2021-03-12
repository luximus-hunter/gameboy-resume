import { CSSProperties } from 'react'
import spritePossition from './spritePossition'
import spritesPng from '../../../assets/sprites.png'
import tilesPng from '../../../assets/tiles.png'

interface Props {
  size: number
  scale: number
  spriteIndex: number
  type: 'tile' | 'sprite'
}

const ScreenManager = ({ size, scale, spriteIndex, type }: Props) => {
  const pos = spritePossition(spriteIndex)

  const style: CSSProperties = {
    width: size * scale,
    height: size * scale,
    backgroundImage: `url(${type ===  "tile" ? tilesPng : spritesPng})`,
    backgroundPositionX: pos.xOffset * scale,
    backgroundPositionY: pos.yOffset * scale,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '600%'
  }

  return <div className='Tile' style={style} />
}

export default ScreenManager
