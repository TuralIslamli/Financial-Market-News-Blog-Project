import React from "react";
import { data } from "../../data";
import "./index.css"

class Article extends React.Component {
    
    render(){
        console.log(this.props.match.params);
        let index = this.props.match.params;
        
        return(
            <div className="article_content">
                <p className="content_title">{data[index.idx].title}</p>
                <img src={data[index.idx].imageUrl} className="content_image"/>
                <p className="content_description">{data[index.idx].description}</p>
                <div className="content_expert_comment">
                    <p className="expert_title">Experts comment</p>
                    <p className="expert_comment">{data[index.idx].expertComment}</p>
                </div>
            </div>
        )
    }
}

export default Article;