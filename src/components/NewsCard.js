import React from 'react';
import className from 'classnames'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import '../NewsCard.css'
const Newscard = ({article,i, activeArticle}) => {
    return (
        <Card className="card" className={className(activeArticle === i ? "activeCard" : null)}>
            <CardActionArea href={article.url} target="_blank">  
                <CardMedia className="img" image={article.urlToImage || 'https://f0.pngfuel.com/png/353/383/red-and-white-sorry-we-re-closed-signage-png-clip-art-thumbnail.png'}/>
                <div className="details">
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(article.publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{article.source.name}</Typography>
                </div>
                <Typography className="title" gutterBottom variant="h5"  component="h5">{article.title}</Typography>
                <CardContent>
                    <Typography color="textSecondary" variant="body2" component="p">{article.description}</Typography>
                </CardContent>
            </CardActionArea>
                <CardActions className="cardActions">
                    <Button size="small" color="primary">Know More.</Button>
                    <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
                </CardActions>
            
        </Card>
    )
}

export default Newscard;