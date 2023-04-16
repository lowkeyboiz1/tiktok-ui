import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SuggestedAccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1681783200&x-signature=mNOML4ZX2AM5GQNXNJ93dVzlYqM%3D"
                alt=""
            />

            <div className={cx('info')}>
                <div className={cx('nickname')}>
                    <strong>tiin.vn</strong>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('check')}></FontAwesomeIcon>
                </div>
                <div className={cx('user-name')}>Tiin.vn</div>
            </div>
        </div>
    );
}

export default SuggestedAccountItem;
