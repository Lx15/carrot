import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ContentModal from './components/ContentModal'
import './content.scss'

function Content() {
    const [isShowContentModal, setIsShowContentModal] = useState(false)

    return (
        <div className="contentCnt">
            <div
                className="content-entry"
                onClick={() => {
                    setIsShowContentModal(true)
                }}
            />
            { isShowContentModal && <ContentModal onClose={() => setIsShowContentModal(false)} /> }
        </div>
    )
}

const app = document.createElement('div')
app.id = 'contentCnt'
document.body.appendChild(app)

ReactDOM.render(<Content />, app)

try {
    let insertScript = document.createElement('script')
    insertScript.setAttribute('type', 'text/javascript')
    insertScript.src = window.chrome.extension.getURL('insert.js')
    document.body.appendChild(insertScript)
} catch (err) {}
