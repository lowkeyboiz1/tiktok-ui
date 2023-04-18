import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [api, setApi] = useState([]);
    const [loading, setLoading] = useState(false);

    const cx = classNames.bind(styles);
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleClear = () => {
        inputRef.current.focus();
        setSearchResult([]);
        setSearchValue('');
        setLoading(false);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = async (e) => {
        setLoading(true);
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            if (searchValue.length > 0) {
                const result = await axios.get(`https://server-youtube.onrender.com/search/${searchValue}`);
                setApi(result.data);
                setLoading(false);
            } else {
                setLoading(false);
            }
        }
    };

    return (
        <HeadlessTippy
            interactive
            appendTo={() => document.body}
            offset={[0, 10]}
            visible={showResult && searchValue.length > 0}
            placement="bottom"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {/* <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem /> */}
                        {api ? <span>Loading</span> : ''}
                        {api.map((item, index) => (
                            <AccountItem
                                key={index}
                                avatar={item.avatar}
                                name={item.name}
                                userName={item.name}
                                check={item.check}
                            />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => setShowResult(true)}
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleChange}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('btn-search')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
