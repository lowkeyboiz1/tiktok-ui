import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import VideoInfo from './VideoInfo';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Video() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d6040eddc4f0b30debe74779cdae0c51~c5_100x100.jpeg?x-expires=1681815600&x-signature=oNFlScd4OpRIDOKKV4Fd8ul8JN0%3D"
                alt="avatar"
            />
            <VideoInfo />

            <Button outline className={cx('follow')}>
                Follow
            </Button>
        </div>
    );
}

export default Video;
