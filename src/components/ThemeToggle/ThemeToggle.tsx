import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import useTheme from '../../hooks/useTheme';
import './ThemeToggle.scss';
import Button from '../Button/Button';

function ThemeToggle() {
    const { changeTheme, theme } = useTheme();

    const toggleTheme = () => {
        changeTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className='theme-toggle'>
            <Button
                icon={theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
                onClick={toggleTheme}
            />
        </div>
    );
}

export default ThemeToggle;
