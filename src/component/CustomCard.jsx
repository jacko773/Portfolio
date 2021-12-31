
import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: (props) =>
            props.color === 'red'
                ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                : 'linear-gradient(45deg, rgb(35 37 38) 30%, rgb(59 139 158) 70%)',
                // : 'linear-gradient(310deg, rgba(20, 23, 39, 0.8), rgba(58, 65, 111, 0.8)), url(https://demos.creative-tim.com/soft-ui-dashboard-material-ui/static/media/curved14.12c9ea54.jpg)',
        border: 0,
        borderRadius: 12,
        height : 180,
        boxShadow: (props) =>
            props.color === 'red'
                ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
                : '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
    },
    paper : {
        borderRadius: 12,
    }
});

const CustomCard = (props) => {
    const { color, children } = props;
    const classes = useStyles();
    return (
        <Paper elevation={3} md={4} className={classes.paper}>
            <Card className={classes.root}>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </Paper>
    )
}

export default CustomCard
