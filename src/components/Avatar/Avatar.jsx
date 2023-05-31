import styles from './Avatar.module.scss';

const Avatar = ({ className, bgColor, children }) => {
    return (
        <span className={`${styles.span} ${className}`} style={{ "--bg": bgColor }}>{children}</span>
    )
}

export default Avatar