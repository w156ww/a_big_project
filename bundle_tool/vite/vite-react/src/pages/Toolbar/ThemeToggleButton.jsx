import React from 'react'
import BaseButton from '../../component/BaseButton'
import {ThemeContext} from '../../context'

const ThemeToggleButton = () => {
    return (
        <ThemeContext.Consumer>
            {
                (context) => {
                    
                    return <BaseButton onClick={context.toggleTheme}>切换主题</BaseButton>
                }
            }
        </ThemeContext.Consumer>
    )
}


export default ThemeToggleButton


