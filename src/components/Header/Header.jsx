import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { FiSearch } from 'react-icons/fi'
import { FaRobot } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { TbMessageCircle2Filled } from 'react-icons/tb'
import { MdNotifications } from 'react-icons/md'
import { IoChevronDownSharp } from 'react-icons/io5'
import { useMediaQuery } from '../../hooks';

const Header = ({ isSidebarOpen }) => {
    const isTablet = useMediaQuery(950);

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                {!isSidebarOpen && <Link to="/">cw3</Link>}
                {!isTablet && <span>Analytics</span>}
            </div>
            {!isTablet && (
                <label>
                    <input type="text" placeholder='search anything...' />
                    <span className={styles.search}><FiSearch /></span>
                    <button><span><FaRobot /></span><span>Chat Bot</span></button>
                </label>
            )}
            <div className={styles.right}>
                {
                    !isTablet && (
                        <div className={styles.icons}>
                            <span><AiFillStar /></span>
                            <span><TbMessageCircle2Filled /></span>
                            <span><MdNotifications /></span>
                        </div>
                    )
                }
                <div className={styles.avatar}>
                    <img src="/avatar.png" alt="Chad 5" />
                    <span>Chad 5</span>
                    <button><IoChevronDownSharp /></button>
                </div>
            </div>
        </div >
    )
}

export default Header