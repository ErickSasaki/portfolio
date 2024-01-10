import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import useTheme from '../../hooks/useTheme';
import './ThemeToggle.scss';

function ThemeToggle() {
    const { changeTheme, theme } = useTheme();

    const toggleTheme = () => {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className='theme-toggle'>
            <button className='icon' onClick={toggleTheme}>
                {theme === 'dark' ? (
                    <IoSunnyOutline />
                ) : (
                    <IoMoonOutline />
                )}
            </button>
        </div>
    );
}

export default ThemeToggle;
