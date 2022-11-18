import "./Header.css";
function Header()
{
    return (
        <header>
        <div className="header_inner_shadow">
        <div className="header_content">
            <div className="header_billboard">
                <img className="kkk" src="https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="billboard"/>
            </div>

            <h4 className="header_desc">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
            </h4>
            <div className="header_button">
                <button className="header_button play_button">Play</button>
                <button className="header_button more_info_button">More Info</button>
            </div>
        </div>
    </div>    
        </header>
    )
}
export default Header