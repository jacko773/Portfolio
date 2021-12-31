import Drawer from '@material-ui/core/Drawer';
import {makeStyles } from '@material-ui/styles/makeStyles'

import React from 'react'

const useStyles = makeStyles({
    root : {
    }
})

const CustomDrawer = () => {
    const classes = useStyles();
    return (
        <>
            <Drawer className={classes.root}>
                
            </Drawer>
        </>
    )
}

export default CustomDrawer
