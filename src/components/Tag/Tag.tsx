import { ReactNode } from 'react';
import './Tag.scss'

export interface TagProps {
    children: ReactNode;
}

function Tag({ children }: TagProps) {
    return (
        <div className="tag">
            { children }
        </div>
    )
}

export default Tag;
