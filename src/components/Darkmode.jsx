import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import './Styles/Darkmode.css'

function Darkmode() {
    const [darkMode, setDarkMode] = useState(false)

    function handleClick(event) {
        if (darkMode) {
            document.documentElement.style.setProperty('--dark', 'rgb(17, 20, 40)')
            document.documentElement.style.setProperty('--light', 'rgb(242, 242, 240)')
            document.documentElement.style.setProperty('--light-view', 'rgb(255, 255, 255)')
            document.documentElement.style.setProperty('--dark-view', 'rgb(72, 72, 72)')
            setDarkMode(false)
        } else {
            document.documentElement.style.setProperty('--light', 'rgb(17, 20, 40)')
            document.documentElement.style.setProperty('--dark', 'rgb(242, 242, 240)')
            document.documentElement.style.setProperty('--dark-view', 'rgb(255, 255, 255)')
            document.documentElement.style.setProperty('--light-view', 'rgb(72, 72, 72)')
            setDarkMode(true)
        }
    }

    return (
        <>
            <button id='dark-mode' type='button'>
            { !darkMode ? (<FontAwesomeIcon icon={faMoon} onClick={handleClick}/>)
            : (<FontAwesomeIcon icon={faSun} onClick={handleClick}/>)
            }
            </button>
        </>
    )
}

export default Darkmode