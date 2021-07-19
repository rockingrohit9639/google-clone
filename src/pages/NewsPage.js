import React, { useEffect, useState } from 'react';
import "./NewsPage.css";
import Header from '../components/Header';
import { useStateValue } from '../StateProvider';

function NewsPage()
{

    const [{ term }] = useStateValue();

    const [data, setData] = useState(null);

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            fetch(`https://newsapi.org/v2/everything?q=${ term }&apiKey=93aa36a48c83413ba9553ea1cf609c7f`)
                .then(response => response.json())
                .then(data =>
                {
                    setData(data);
                })
        }
        fetchData();
    }, [term]);

    return (
        <div className="newsPage">
            <div className="newsPage__header">
                <Header />
            </div>
            <div className="newsPage__content">
                <p className="newsPage__count"> About {data?.totalResults} results (0.3seconds) </p>
                <h3> <strong> Top story </strong> </h3>

                <div className="newsPage__results">
                    {data?.articles.map((item, key) => (
                        (<div key={key} className="newsPage__result">


                            <div className="newsPage__resultLeft">
                                <p className="newsPage__source"> {item?.source.name} </p>
                                <a href={item?.url} target="_blank"> <h4> {item?.title} </h4> </a>
                                <p className="newsPage__description"> {item?.description} </p>
                                <p className="newsPage__date"> Published at - {item?.publishedAt} </p>
                            </div>


                            <div className="newsPage__resultRight">
                                <img
                                    src={item?.urlToImage}
                                    alt="sourceImage"
                                    className="newsPage__image"
                                />
                            </div>

                        </div>)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsPage;
