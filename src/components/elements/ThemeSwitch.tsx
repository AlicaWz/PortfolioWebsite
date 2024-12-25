import { useEffect, useState } from "react"
import Icon from '@components/elements/Icon'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type Theme = 'dark' | 'light'

export const ThemeSwitch = () => {

    const [theme, setTheme] = useState<Theme>('dark')

    const handleChange = (e: ChangeEvent) => setTheme(e.target.checked ? 'light' : 'dark')

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
