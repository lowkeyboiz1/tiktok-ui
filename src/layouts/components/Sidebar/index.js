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
    const suggestedAccounts = [
        {
            title: 'Suggested accounts',
            data: [
                {
                    id: 1,
                    avatar: 'https://cdn.glitch.global/4a7f436a-2f03-4a40-bed5-9b6ea0e275bf/ava26.jpg?v=1681388838056',
                    name: 'Sơn Tùng M-TP Official',
                    userName: 'Sơn Tùng',
                    check: true,
                },
                {
                    id: 2,
                    avatar: 'https://cdn.glitch.global/4a7f436a-2f03-4a40-bed5-9b6ea0e275bf/ava17.jpg?v=1681388801060',
                    name: 'HoleTex',
                    userName: 'HoleTex',
                    check: true,
                },
                {
                    id: 3,
                    avatar: 'https://cdn.glitch.global/4a7f436a-2f03-4a40-bed5-9b6ea0e275bf/ava6.jpg?v=1681388740328',
                    name: 'Bugs Music Channel',
                    userName: 'Sơn Tùng',
                    check: false,
                },
                {
                    id: 4,
                    avatar: 'https://cdn.glitch.global/4a7f436a-2f03-4a40-bed5-9b6ea0e275bf/ava13.jpg?v=1681388785376',
                    name: 'F8 Official',
                    userName: 'F8',
                    check: true,
                },
                {
                    id: 5,
                    avatar: 'https://cdn.glitch.global/4a7f436a-2f03-4a40-bed5-9b6ea0e275bf/ava18.jpg?v=1681388806833',
                    name: 'Learn English',
                    userName: 'Jessica',
                    check: false,
                },
                {
                    id: 6,
                    avatar: 'https://cdn.glitch.global/4a7f436a-2f03-4a40-bed5-9b6ea0e275bf/ava7.jpg?v=1681388742707',
                    name: 'GENIE MUSIC',
                    userName: 'GENIE MUSIC',
                    check: true,
                },
                {
                    id: 7,
                    avatar: 'https://cdn.glitch.global/4a7f436a-2f03-4a40-bed5-9b6ea0e275bf/ava28.jpg?v=1681388851225',
                    name: 'English Fluency Journey',
                    userName: 'English Fluency Journey',
                    check: false,
                },
            ],
        },
    ];

    return (
        <div className={cx('wrapper-menu')}>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        icon={<HomeIcon />}
                        to={config.routes.home}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        icon={<UserGroupIcon />}
                        to={config.routes.following}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        icon={<LiveIcon />}
                        to={config.routes.live}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>

                <SuggestedAccounts label={suggestedAccounts[0].title} />
                <SuggestedAccounts label={'Following accounts'} />
            </aside>
        </div>
    );
}

export default Sidebar;
