import './Styles/Preview.css'
import { marked } from 'marked'
import parse from 'html-react-parser'

function Preview({ markDown }) {
    
    marked.use({
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartypants: false,
        xhtml: false 
    })

    return (
        <section id='preview'>
            {parse(marked.parse(markDown))}
        </section>
    )
}

export default Preview