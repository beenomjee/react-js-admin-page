import styles from './CardHeading.module.scss'

const CardHeading = () => {
    return (
        <div className={styles.heading}>
            <div className={styles.left}>
                <h3>Top Refferal campaign Sources</h3>
                <span>Counted in Millions</span>
            </div>
            <button>PDF report</button>
        </div>
    )
}
export default CardHeading