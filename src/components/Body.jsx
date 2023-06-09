import './Styles/Body.css'
import Editor from './Editor'
import Slider from './Slider'
import Preview from './Preview'
import { useState } from "react"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

function Body() {
    const [markDown, setMarkdown] = useState(
        `
# Welcome to my React Markdown Previewer! 

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.linkedin.com/in/michael-ian-wyss/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![sunny star wars meme including the Thing](https://static.boredpanda.com/blog/wp-content/uploads/2015/10/fantastic__605.jpg)

## Create by **Mike Wyss**
        `
    )

    const viewPortHeight = screen.orientation === 'portrait' ? screen.height * 0.39 : screen.height * 0.78
    return (
        <section id='body'>
            <Editor setMarkdown={setMarkdown} markDown={markDown} viewPortHeight={viewPortHeight}/>
            <Slider />
            <Preview markDown={markDown} viewPortHeight={viewPortHeight}/>  
        </section>
    )
}

export default Body