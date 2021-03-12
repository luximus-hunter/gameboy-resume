import './style.scss'

import { Actions } from '../../App'
import ButtonContainer from './parts/ButtonContainer'

interface Props {
  actions: Actions
  children: any
}

const Houzing = ({ actions, children }: Props) => {
  return (
    <main id='main-container'>
      <header id='title-bar'>
        <img
          alt='yeet'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Gameboy_logo.svg/1179px-Gameboy_logo.svg.png'
        />
      </header>
      <section id='screen-container'>{children}</section>
      <ButtonContainer actions={actions} />
      <footer id='footer-bar'></footer>
    </main>
  )
}

export default Houzing
