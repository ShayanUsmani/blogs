import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    button: {
        color: "#3f51b5",
        fontSize: "14px",
        backgroundColor: "#3f51b5",
        color: "#fff",
        padding: "10px",
        height: "30px",
        "&:hover": {
            backgroundColor: '#fff',
            color: "#3f51b5",
            border: "1px solid #3f51b5",
            transition: ".5s ease"
          }

    },
    card: {
        padding: 5,
        cursor: "pointer",
    },
    title: {
        marginBottom: 25
    },
    media: {
        
        "&:hover": {
            
        }
    },

    shareIcon: {
        "&:hover": {
            backgroundColor: "transparent",
            color: "#3f51b5",
            transition: ".5s ease"
          }
          },
          card__img: {
    }
    
});



const Cards = (props) => {
    const classes = useStyles();
    const { imageUrl, title, description } = props;

    return (

        <>
        <Card className={classes.card}>
            <CardMedia className={classes.media}>
                <img src={imageUrl} alt="img" className='card__img' height={"200px"} width={"100%"} />
                </CardMedia>
            
            <CardContent>
                <Typography variant="h5" component="h2" className={classes.title}>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button className={classes.button} size="small">Learn More</Button>
                <IconButton className={classes.shareIcon}>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        </>
    );
}

export default Cards;