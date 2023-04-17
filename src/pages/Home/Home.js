import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import useScrollSnap from 'react-use-scroll-snap';

import Video from './Video';

const cx = classNames.bind(styles);

function Home() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

    useEffect(() => {
        scrollRef.current.focus();
    }, []);

    return (
        <div ref={scrollRef} className={cx('wrapper')}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    );
}

export default Home;
