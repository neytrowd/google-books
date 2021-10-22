import {Box, Card, CardContent, Grid, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import StyleCardItem from "./StyleCardItem";

const CardItem = ({info}) => {
    const classes = StyleCardItem();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <NavLink to={{pathname: '/info', state: {id: info?.id}}}
                     className={classes.text}>
                <Card>
                    <Box>
                        <img
                            width={'100%'} height={'250px'}
                            src={info?.volumeInfo?.imageLinks?.thumbnail}
                        />
                    </Box>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {info?.volumeInfo?.categories?.join(' , ')}
                        </Typography>
                        <Typography variant="body2" color="primary" component="p" className={classes.name}>
                            {info?.volumeInfo?.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {info?.volumeInfo?.authors?.join(' , ')}
                        </Typography>
                    </CardContent>
                </Card>
            </NavLink>
        </Grid>
    )
}

export default CardItem;