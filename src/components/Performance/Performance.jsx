import styles from './Performance.module.scss';

import { RiArrowRightDownLine, RiArrowRightUpLine } from 'react-icons/ri'
const Performance = ({ value }) => {
    return (
        <div className={`${styles.container} ${value >= 0 ? styles.success : styles.danger}`}>
            <span>{value >= 0 ? <RiArrowRightUpLine /> : <RiArrowRightDownLine />}</span>
            <span>{value}%</span>
        </div>
    )
}

export default Performance