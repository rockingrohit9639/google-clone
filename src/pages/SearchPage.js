import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Header from "../components/Header";

function SearchPage()
{
    //AIzaSyBkHakIOnbIcGvfswOAG-tFM9iPpS62qqc

    const [{ term }] = useStateValue();

    //FOR LIVE CALLS
    const data = useGoogleSearch(term);

    return (
        <div className="searchPage">
            <Header />

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
