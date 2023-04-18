import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ avatar, name, userName, check }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={avatar} alt="hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{name}</span>
                    {check && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{name}</span>
            </div>
        </div>
    );
}

export default AccountItem;
