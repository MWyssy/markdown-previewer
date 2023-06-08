import './App.css'
import Title from './components/Title'
import Editor from './components/Editor'
import Preview from './components/Preview'
import Darkmode from './components/Darkmode'

function App() {
  return (
    <>
      <Darkmode/>
      <Title/>
      <section id='body'>
        <Editor/>
        <Preview/>
      </section>
    </>
  )
}

export default App
