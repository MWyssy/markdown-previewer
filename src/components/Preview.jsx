import './Styles/Preview.css'
import { marked } from 'marked'
import parse from 'html-react-parser'

function Preview({ markDown, viewPortHeight }) {
    
    marked.use({
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartypants: false,
        xhtml: false 
    })

    return (
        <section id='preview' style={{ height: viewPortHeight }}>
            {parse(marked.parse(markDown))}
        </section>
    )
}

export default Preview