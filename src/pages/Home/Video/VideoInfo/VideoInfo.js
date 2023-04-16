import classNames from 'classnames/bind';
import styles from './VideoInfo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMusic } from '@fortawesome/free-solid-svg-icons';
import VideoContent from '../VideoContent/VideoContent';

const cx = classNames.bind(styles);

function VideoInfo() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('info')}>
                        <div className={cx('nickname')}>
                            <strong>hoaminzy_hoadambut</strong>
                            <FontAwesomeIcon icon={faCircleCheck} className={cx('check')}></FontAwesomeIcon>
                        </div>
                        <div className={cx('user-name')}>Hòa minzy</div>
                    </div>
                    <div className={cx('description')}>Gần 10 năm tình bạn của chúng ta 👫</div>
                    <div className={cx('tags')}></div>
                    <div className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} className={cx('music-icon')}></FontAwesomeIcon>
                        <span className={cx('music-name')}>nhạc nền - Hoà Minzy</span>
                    </div>
                </div>
            </div>
            <VideoContent />
        </div>
    );
}

export default VideoInfo;
