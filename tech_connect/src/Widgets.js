import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>NewsFeed</h2>
        <InfoIcon />   
      </div>

      { newsArticle("Tech Connect is up", "Top News - 1,000,000 readers")}
      { newsArticle("Kennedy Presidential Run", "Top News - 560,000 readers")}
      { newsArticle("BBC Elon Musk interview", "Top News - 400,000 readers")}
      { newsArticle("Andrew Tate and Greta Thunberg", "Top News - 355,000 readers")}
    </div>
  )
}

export default Widgets
