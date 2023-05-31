import { Performance, Avatar, LineChart } from '../../../components';
import styles from './Top.module.scss';
import { HiOutlineUsers } from 'react-icons/hi'
import { CiMenuKebab } from 'react-icons/ci'

const Box = () => {
    return (
        <div className={styles.box}>
            <Avatar bgColor="#826AF9" className={styles.avatar} ><HiOutlineUsers /></Avatar>
            <h6>Organic Sessions</h6>
            <span className={styles.value}>35,568</span>
            <Performance value={-8.02} />
            <button><CiMenuKebab /></button>
        </div>
    )
}

const tableHeadWidth = [0, 30, 20, 20, 30];

const Table = () => {
    return (
        <div className={styles.table}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <Avatar bgColor="#826AF9"><HiOutlineUsers /></Avatar>
                    <div>
                        <h6>Visits by Social Network</h6>
                        <div><span>5,038</span><Performance value={2.2} /></div>
                    </div>
                </div>
                <button><CiMenuKebab /></button>
            </div>
            <div className={styles.tWrapper}>
                <table>
                    <thead>
                        <tr>
                            {
                                tableHeadWidth.map((w, i) => (
                                    <th key={i + w} style={{ "--w": `${w}%` }}></th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array(5).fill(0).map((_, index) => (
                                <tr key={index}>
                                    <td className={styles.sr}>#{index + 1}</td>
                                    <td className={styles.img}>
                                        <div>
                                            <img src="/insta.png" alt="INSTA" />
                                            <div>
                                                <span>Dribble</span>
                                                <span>Community</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.value}>579</td>
                                    <td className={styles.performance}><Performance value={4.85} /></td>
                                    <td className={styles.chart}><LineChart /></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Top = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Box />
                <Box />
            </div>
            <div className={styles.right}>
                <Table />
            </div>
        </div>
    )
}

export default Top