import { CardHeading, Performance } from '../../../components';
import styles from './Middle.module.scss';



const Table = () => {
    return (
        <div className={styles.table}>
            <table>
                <thead>
                    <tr>
                        <th>Campaign</th>
                        <th>Sessions</th>
                        <th>Conversation rate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array(6).fill(0).map((_, i) => (
                            <tr key={i}>
                                <td>
                                    <div>
                                        <img src="/avatar.png" alt="avatar" />
                                        <span>Google</span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>1.256</span>
                                        <Performance value={-935} />
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span>23.63%</span>
                                        <Performance value={28.73} />
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

const Middle = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}><Card /></div>
            <div className={styles.right}><Card /></div>
        </div>
    )
}

export default Middle