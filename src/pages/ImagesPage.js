import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useStateValue } from '../StateProvider';
import { createClient } from 'pexels';
import "./ImagesPage.css";

function ImagesPage()
{
    const [{ term }] = useStateValue();

    const [images, setImages] = useState(null);

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            console.log('fetching the data');

            const client = createClient('563492ad6f91700001000001f56e7be42dfc4dca99826176b7855956');
            const query = term;

            client.photos.search({ query, per_page: 40 }).then(photos => setImages(photos));

        }
        fetchData();
    }, [term]);

    console.log(images)

    return (
        <div className="imagesPage">
            <Header />

            <div className="imagesPage__images">
                {images?.photos?.map((item, key) => (
                    <div key={key} className="imagesPage__image">
                        <a href={item?.src?.large} target="_blank">
                        <img
                            className="imagesPage__pic"
                            src={item?.src?.original}
                            alt="image"
                            />
                        </a>
                        <p> By { item?.photographer } </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImagesPage;
