import React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
const ContentHeader = ({title}) => {
    return (
        <Grid item xs={12}>
            <h2>{title}</h2>
            <Divider width={30} style={{background : 'blue' , height : 2}}></Divider>
        </Grid>
    )
}

export default ContentHeader
