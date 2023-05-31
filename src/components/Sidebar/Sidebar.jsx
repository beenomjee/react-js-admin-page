import { Link, NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3, HiUsers } from 'react-icons/hi'
import { RxDashboard } from 'react-icons/rx';
import { ImCoinPound } from 'react-icons/im'
import { MdOutlineCategory, MdOutlineSignalCellularAlt, MdCall, MdFolder } from 'react-icons/md'
import { TbMessage2 } from 'react-icons/tb'
import { TiTicket } from 'react-icons/ti'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { useClickOutside, useMediaQuery } from '../../hooks';
import { useRef } from 'react';

const Menus = [
    { path: '/', icon: <RxDashboard />, name: 'Home', },
    { path: '/tribes', icon: <ImCoinPound />, name: 'Tribes', },
    { path: '/tribe-categories', icon: <MdOutlineCategory />, name: 'Tribe Categories', },
    { path: '/content-sources', icon: <TbMessage2 />, name: 'Content Sources', },
    { path: '/rss-channels', icon: <MdOutlineSignalCellularAlt />, name: 'Rss Channels', },
    { path: '/content-folder', icon: <MdFolder />, name: 'Content Folder', },
    { path: '/support-center', icon: <MdCall />, name: 'Support Center', },
    { path: '/tickets', icon: <TiTicket />, name: 'Tickets', },
    { path: '/company-profile', icon: <BsFillBriefcaseFill />, name: 'Company Profile', },
    { path: '/my-profile', icon: <HiUsers />, name: 'My Profile', },
]

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const isTablet = useMediaQuery(950);
    const isMobile = useMediaQuery(580);
    const containerRef = useRef(null);

    useClickOutside(containerRef, () => {
        if (isMobile) {
            toggleSidebar(null, false);
        }
    })

    return (
        <div ref={containerRef} className={`${styles.container} ${isSidebarOpen ? styles.open : styles.close}`}>
            <div className={styles.top}>
                <button name='close' onClick={toggleSidebar}><HiOutlineMenuAlt2 /></button>
                <Link name="open" to="/">cw3</Link>
                <button name='open' onClick={toggleSidebar}><HiOutlineMenuAlt3 /></button>
            </div>
            <nav className={styles.middle}>
                {isTablet && <label><span><FiSearch /></span><input name="open" type='text' placeholder='search anything...' /></label>}
                {
                    Menus.map(menu => (
                        <NavLink className={({ isActive }) => isActive ? styles.selected : null} to={menu.path} key={menu.name}><span>{menu.icon}</span><span name="open">{menu.name}</span></NavLink>
                    ))
                }
            </nav>
        </div>
    )
}

export default Sidebar