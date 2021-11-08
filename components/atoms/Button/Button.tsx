import styles from './Button.module.css'

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children?: React.ReactNode;
}

export const Button = ({
    variant = 'primary',
    children,
}:ButtonProps) => {
    return (
        <button
            className={[
               styles.button,
               styles[`button--${variant}`]
            ].join(' ')}
        >{children}</button>
    )
}