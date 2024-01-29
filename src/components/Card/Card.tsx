import { ReactNode } from 'react';
import './Card.scss'

interface CardProps {
    children: ReactNode;
}

function Card({ children }: CardProps) {
    return (
        <div id="card">
            {children}
        </div>
    )
}

export default Card;
