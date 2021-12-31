import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Avatar } from '@material-ui/core'
import images from '../static/images/I.jpg'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));
const HomeContainer = () => {
    const classes = useStyles();
    return (
        <>
            <Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Avatar style={{ textAlign: 'center' }} src={images} className={classes.large} />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} style={{ color: 'white' }}><h2>Vinay Kumar</h2></Grid>
                <Grid item xs={12}><span className="under_line_text"> Software Engineer</span></Grid>
                <Grid item xs={12} style={{ color: 'blue', marginTop: 70 }}>
                    A competent professional with experience of 4 years in frontend as well as backend development,
                    <br />
                    Having experience of leding team of 7 members.
                </Grid>
            </Grid>
        </>
    )
}

export default HomeContainer
