import { CardHeading } from '../../../components';
import styles from './Bottom.module.scss';

const Table = () => {
    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        <th>
                            <div>
                                <span>Keyword</span>
                                <span>Clicks</span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(6).fill(0).map((_, i) => (
                            <tr key={i}>
                                <td>
                                    <div>
                                        <div className={styles.top}>
                                            <span>Buy phone online</span>
                                            <span>263</span>
                                        </div>
                                        <div style={{ "--w": "40%" }} className={styles.bottom}>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <CardHeading />
            </div>
            <div className={styles.bottom}>
                <Table />
            </div>
        </div>
    )
}

const Bottom = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}><Card /></div>
            <div className={styles.right}><Card /></div>
        </div>
    )
}

export default Bottom