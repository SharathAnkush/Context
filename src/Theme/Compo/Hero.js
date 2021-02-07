import React , {useContext} from 'react';
import ColorTheme from '../ColorTheme';
import ThemeContext from '../Context';
import Toggler from '../Toggler'

const Hero = () => {
    const Theme = useContext(ThemeContext)[0]
    const currentTheme = ColorTheme[Theme]

    return(
        <div style={{
            padding:'1rem',
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.Color}`
        }}>
            <h1>Hero Section</h1>
            <button>Context</button>
            <Toggler/>
        </div>
    )

export default Hero;