import './style.scss'

import { Actions } from '../../../../App'

interface Props {
  actions: Actions
}

const ButtonContainer = ({ actions }: Props) => {
  return (
    <section id='button-container'>
      <div id='d-pad'>
        <div className='row'>
          <div className='empty'></div>
          <button id='btn-up' onClick={() => actions.updatePossition('u')} className='d-pad-button'>
            <i className='fas fa-chevron-up'></i>
          </button>
          <div className='empty'></div>
        </div>
        <div className='row'>
          <button
            id='btn-left'
            onClick={() => actions.updatePossition('l')}
            className='d-pad-button'
          >
            <i className='fas fa-chevron-left'></i>
          </button>
          <div className='empty'></div>
          <button
            id='btn-right'
            onClick={() => actions.updatePossition('r')}
            className='d-pad-button'
          >
            <i className='fas fa-chevron-right'></i>
          </button>
        </div>
        <div className='row'>
          <div className='empty'></div>
          <button
            id='btn-down'
            onClick={() => actions.updatePossition('d')}
            className='d-pad-button'
          >
            <i className='fas fa-chevron-down'></i>
          </button>
          <div className='empty'></div>
        </div>
      </div>
      <div id='ab-buttons'>
        <button id='btn-b' onClick={() => actions.buttonPress('b')} className='ab-button'>
          B
        </button>
        <button id='btn-a' onClick={() => actions.buttonPress('a')} className='ab-button'>
          A
        </button>
      </div>
    </section>
  )
}

export default ButtonContainer
