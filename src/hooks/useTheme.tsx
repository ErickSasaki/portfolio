import { useEffect } from "react";

type ThemeOptions = 'light' | 'dark';

function useTheme(theme: ThemeOptions) {
    useEffect(() => {
        document.body.setAttribute('theme', theme);
    }, [theme]);
}

export default useTheme;