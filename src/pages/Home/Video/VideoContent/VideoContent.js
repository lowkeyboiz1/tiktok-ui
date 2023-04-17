import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './VideoContent.module.scss';
import video from '~/assets/video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function VideoContent() {
    const [isPlay, setIsPlay] = useState(false);
    const videoRef = useRef();

    const handleVideo = () => {
        if (isPlay) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlay(!isPlay);
    };

    return (
        <div className={cx('wrapper')}>
            <video
                className={cx('video')}
                autoPlay
                loop
                muted
                onClick={handleVideo}
                src={video.video1}
                ref={videoRef}
            ></video>
            <div className={cx('actions')}>
                <div className={cx('wrapper-icon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                    <span className={cx('number')}>29.5K</span>
                </div>
                <div className={cx('wrapper-icon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                    <span className={cx('number')}>701</span>
                </div>
                <div className={cx('wrapper-icon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                    <span className={cx('number')}>417</span>
                </div>
            </div>
        </div>
    );
}

export default VideoContent;
