import { useState, useEffect, useRef } from 'react';

const MenuItem = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const {title, submenu, slug} = data;

    useEffect(() => {
        const handler = (evt) => {
            if (menuRef.current && ! menuRef.current.contains(evt.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handler);

        return () => {
            window.removeEventListener('click', handler);
        }
    }, []);

    const handleOpenSubmenu = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            {submenu.length > 0 ? (
                <li className="site-menu__item" onClick={handleOpenSubmenu}>
                    <span className="site-menu__link" ref={menuRef}>{title}</span>

                    {
                        isOpen && (
                            <div className='site-menu__subitem menu-subitem'>
                                <ul className='menu-subitem__list'>
                                    {
                                        submenu.map(({title, slug}, index) => (
                                            <li key={index} className='menu-subitem__item'>
                                                <a className='menu-subitem__link' href={`#${slug}`} data-scroll={slug}>{title}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                </li>
            ) : 
                <li className="site-menu__item">
                    <a  href={`#${slug}`} data-scroll={slug} className="site-menu__link">{title}</a>
                </li>            
            }
        </>
    );
}

export default MenuItem;