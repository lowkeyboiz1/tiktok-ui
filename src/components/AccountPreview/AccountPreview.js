import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('preview')}>
            <div className={cx('head')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1681783200&x-signature=mNOML4ZX2AM5GQNXNJ93dVzlYqM%3D"
                    alt=""
                />
                <Button className={cx('preview-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('nickname')}>
                    <strong>tiin.vn</strong>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('check')}></FontAwesomeIcon>
                </div>
                <div className={cx('user-name')}>Tiin.vn</div>
                <div className={cx('analytics')}>
                    <strong className={cx('value')}>8.4M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>529.5M </strong>
                    <span className={cx('label')}>Likes</span>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
