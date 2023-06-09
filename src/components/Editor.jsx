import './Styles/Editor.css'
import { useState } from "react"

function Editor({setMarkdown, markDown, viewPortHeight}) {
    const [input, setInput] = useState(markDown)

    function handleChange(event) {
        setInput(event.target.value)
        setMarkdown(event.target.value)
    }

    return (
        <section id='editor-input' style={{ height: viewPortHeight }}>
            <textarea id='editor' value={input} onChange={handleChange}/>
        </section>
        )
}

export default Editor