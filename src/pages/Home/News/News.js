import React from 'react';
import NewsSummery from '../NewsSummery/NewsSummery';
import './News.css';


const News = () => {
    const news = [
        {
            "img": "https://i.ibb.co/nQZPCX9/news-01.jpg",
            "title": "Journeys are best measured in new friends",
            
            "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            "img": "https://i.ibb.co/Z1Bq9w4/news-02.jpg",
            "title": "Let’s start adventure with best tripo guides",
            "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            "img": "https://i.ibb.co/HdLXWN8/news-03.jpg",
            "title": "South asia tour limited time packages",
            "description": "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
    ]
    return (
        <div className="py-5">
            <div className="container">
            <h2 className="pb-3 text-center" style={{color: '#ff7f47'}}>Latest News & Articles</h2>
                <div className="news-container">
                    {   
                        news?.length === 0 ?
                        <h2 style={{textAlign: 'center', color: '#1976d2', marginTop: '50px'}}>Loading...</h2>
                        :
                        news?.map(blogNews => <NewsSummery news={blogNews}></NewsSummery>)
                    }
                </div>
            </div>
        </div>
    );
};

export default News;