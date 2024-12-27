import { useEffect, useState } from "react"
import Icon from '@components/elements/Icon'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type Theme = 'dark' | 'light'

export const ThemeSwitch = () => {
    const [theme, setTheme] = useState<Theme>('dark')
    
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme
        if (savedTheme) {
            setTheme(savedTheme)
        }
    }, [])

    const handleChange = (e: ChangeEvent) => { 
        const newTheme = e.target.checked ? 'light' : 'dark'
        setTheme(newTheme)
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme)
        }
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="theme-switch">
            <Icon name={theme === 'dark' ? "Sun" : "FilledSun"} class="icon" />
            <input type="checkbox" onChange={handleChange} checked={theme === 'light'} />
        </div>
    )
}