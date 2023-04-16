import { useEffect, useRef } from 'react';

import useScrollSnap from 'react-use-scroll-snap';

import Video from './Video';

function Home() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

    useEffect(() => {
        scrollRef.current.focus();
    }, []);

    return (
        <div ref={scrollRef}>
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
