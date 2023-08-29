import { Dispatch, SetStateAction, useEffect } from 'react'

import { useLocalStorage, useMediaQuery } from 'usehooks-ts'

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)'


type DarkMode = 'dark' | 'light'
interface UseDarkModeOutput {
    darkMode: DarkMode
    setDarkMode: Dispatch<SetStateAction<DarkMode>>
    toggleDarkMode: () => void
}

function setModeToBody(isDarkMode: boolean) {
    if (isDarkMode) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

export function useDarkMode(): UseDarkModeOutput {
    const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY)
    const [darkMode, setDarkMode] =
        useLocalStorage<DarkMode>('mode', isDarkOS ? 'dark' : 'light')

    useEffect(() => {
        switch (darkMode) {
            case 'light':
                setModeToBody(false)
                break
            case 'dark':
                setModeToBody(true)
                break
        }
    }, [darkMode])

    function toggleDarkMode() {
        const toggleDict: Record<DarkMode, DarkMode> = {
            light: 'dark',
            dark: 'light',
        }
        setDarkMode(prevMode => toggleDict[prevMode])
    }

    return {
        darkMode,
        setDarkMode,
        toggleDarkMode,
    }
}
