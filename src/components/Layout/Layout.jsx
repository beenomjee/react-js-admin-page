import { useEffect, useState } from 'react';
import styles from './Layout.module.scss';
import { Header, Sidebar } from '../';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = (e, val = null) => setIsSidebarOpen(p => val ?? !p);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add('opened');
            document.body.classList.remove('closed');
        } else {
            document.body.classList.remove('opened');
            document.body.classList.add('closed');
        }
    }, [isSidebarOpen])

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div className={styles.page}>
                <div className={styles.header}><Header isSidebarOpen={isSidebarOpen} /></div>
                <div><Outlet context={isSidebarOpen} /></div>
            </div>
        </div>
    )
}

export default Layout