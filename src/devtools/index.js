import React from 'react'
import ReactDOM from 'react-dom'
import carrot from '@/assets/logo.svg'
import './devtools.scss'
import '@/content'


function DevtoolsPanel() {
    return (
        <>
          <div className="devtoolsPanelCnt">
            <img src={carrot} alt="logo" className="logo" />
            <div>Devtools - carrot</div>
          </div>
        </>
    )
}

ReactDOM.render(<DevtoolsPanel />,
  document.getElementById('devtoolsPanel')
)