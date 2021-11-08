import styles from './Text.module.scss'

export interface TextProps {
    children?: React.ReactNode
    as?: 'p' | 'span' | 'strong' | 'i'
    color?: CommonColors
    size?: CommonSizes
    italic?: boolean
    bold?: boolean
    thin?: boolean
}

export const Text = ({
    children,
    as = 'p',
    color = 'text',
    size = 'md',
    italic,
    bold,
    thin
}: TextProps) => {
    const Tag = italic ? 'i' : bold ? 'strong' : as
    return (
        <Tag className={[
            styles.text,
            styles[`text--color-${color}`],
            styles[`text--size-${size}`],
            italic ? styles['text--is-italic'] : '',
            bold ? styles['text--is-bold'] : '',
            thin ? styles['text--is-thin'] : ''
            ].join(' ')
        }>
            {children}
        </Tag>
    )
}