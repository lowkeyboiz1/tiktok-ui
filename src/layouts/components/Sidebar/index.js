import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>

            <Menu>
                <MenuItem title="For you" icon={null} to='/'/>
                <MenuItem title="For you" icon={null} to='/'/>
                <MenuItem title="For you" icon={null} to='/'/>
            </Menu>
        </aside>
    );
}

export default Sidebar;
