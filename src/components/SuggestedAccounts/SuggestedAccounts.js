import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.scss';
import SuggestedAccountItem from './SuggestedAccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, data }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <div className={cx('more-btn')}>See all</div>
        </div>
    );
}

export default SuggestedAccounts;
