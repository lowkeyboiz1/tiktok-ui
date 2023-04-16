import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';

import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    LiveIcon,
    LiveActiveIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" icon={<HomeIcon />} to={config.routes.home} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    to={config.routes.following}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" icon={<LiveIcon />} to={config.routes.live} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label={'Suggested accounts'} />
            <SuggestedAccounts label={'Following accounts'} />
        </aside>
    );
}

export default Sidebar;
