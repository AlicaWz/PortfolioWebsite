
import { useEffect, useState } from "react"
import Icon from '@components/elements/Icon'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type Theme = 'dark' | 'light'

export const ThemeSwitch = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const savedTheme = localStorage.getItem('theme') as Theme;
            return savedTheme || 'light';
        }
        return 'light';
    });


    const handleChange = (e: ChangeEvent) => {
        const newTheme = e.target.checked ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
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