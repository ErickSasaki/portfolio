import { useEffect, useState } from "react";

type ThemeOptions = 'light' | 'dark';

function useTheme() {
    const [theme, setTheme] = useState<ThemeOptions>();

    const changeTheme = (theme: ThemeOptions) => {
        document.body.setAttribute('theme', theme);
        setTheme(theme);
    };

    const getTheme = (): ThemeOptions => {
        return document.body.getAttribute('theme') as ThemeOptions || 'dark';
    }

    useEffect(() => {
        setTheme(getTheme());
    }, [])

    return {
        theme,
        changeTheme,
    };
}

export default useTheme;