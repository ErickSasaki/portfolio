import { CSSProperties, ReactNode } from 'react';
import './Card.scss'

interface CardProps {
    children: ReactNode;
    style?: CSSProperties;
}

function Card({ children, style }: CardProps) {
    return (
        <div className="card" style={style}>
            {children}
        </div>
    )
}

export default Card;
