const spritePossition = (index: number) => {
  const tilesX = 6
  const tileSize = 16

  let tileY = 0
  let tileX = 0

  while (index > tilesX) {
    tileY++
    index -= tilesX
  }

  tileX = index - 1

  return { xOffset: -tileX * tileSize, yOffset: -tileY * tileSize }
}

export default spritePossition
