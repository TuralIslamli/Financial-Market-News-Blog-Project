import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const Articles = (props) => {
    console.log(props)
    return(
        <div className="articles_list">
            {props.data.map((item, index)=>{
                return(
                    <NavLink to={`/articles/` + index}>
                        <div key={index} className="article">
                            <img src={item.imageUrl} className="articleImage" alt="article_image"/>
                            <p className="articleTitle">{item.title}</p>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Articles;