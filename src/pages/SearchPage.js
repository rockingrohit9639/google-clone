import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage()
{
    //AIzaSyBkHakIOnbIcGvfswOAG-tFM9iPpS62qqc

    const [{ term }] = useStateValue();

    //FOR LIVE CALLS
    const data = useGoogleSearch(term);

    // const data = Response;

    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="logo"
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButton />

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="/news"> News </Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images"> Images </Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping"> Shopping </Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps"> Maps </Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more"> Maps </Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <Link to="/settings"> Settings </Link>
                            <Link to="/tools"> Tools </Link>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount"> About {data?.searchInformation?.formattedTotalResults} results ( {data?.searchInformation?.formattedSearchTime} seconds) </p>
                

                {data?.items.map((item, key) => (
                    <div key={key} className="searchPage__result">
                        <a className="searchPage__resultLink" href={item?.link}>
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                <img 
                                className="searchPage__resultImage"
                                src={item?.pagemap.cse_image[0]?.src}
                                />
                            )}
                            {item?.displayLink} ⬇️</a>
                        <a className="searchPage__resultTitile" href={item?.link}> <h2> {item?.title} </h2> </a>
                        <p className="searchPage__resultSnippet"> { item?.snippet } </p>
                    </div>
                ))}
                    
                </div>
            )};

        </div>
    );
}

export default SearchPage;
