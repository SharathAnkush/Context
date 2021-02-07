import React,{useContext} from 'react';
import ThemeContext from './Context';


const TheTogg = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    
    return(
        <div onClick={() => {
            setThemeMode(themeMode === 'light'? 'dark' : 'light')
        }}>
           <p>{themeMode === 'light'? 'Turn off' : 'turn on'}</p>
        </div>

    )

}

export default TheTogg;