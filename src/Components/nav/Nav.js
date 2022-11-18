import "./Nav.css"
import { useState, useEffect } from "react";
const Nav = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
        });
        // return () => {
        //     window.removeEventListener('scroll');
        // };

    }, []);


    return (
        <nav>
            <>
                <section>
                    <div className="nav_left">
                        <img className="nav_logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
                        <div className="nav_links">
                            <a href="/">Home</a>
                            <a href="/">TV Shows</a>
                            <a href="/">TV Movies</a>
                            <a href="/">New & Popular</a>
                            <a href="/">My List</a>
                            <a href="/">Browse by Language</a>

                        </div>
                    </div>
                    <div className="nav_right">
                        {/* <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmins='http://www.w3.org/2000/svg'>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d='M13 11C13 13.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 50'
                                fill="currentColor"
                            ></path>
                        </svg> */}
                        <img className="nav_avatar"
                            src=""
                            alt="avatar" />
                    </div>
                </section>
            </>
        </nav>
    );
};
export default Nav