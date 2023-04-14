import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';

import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>

            <Menu>
                <MenuItem title="For You" icon={null} to={config.routes.profile}/>
                <MenuItem title="Following" icon={null} to={config.routes.following}/>
                <MenuItem title="LIVE" icon={null} to={config.routes.live}/>
            </Menu>
        </aside>
    );
}

export default Sidebar;
