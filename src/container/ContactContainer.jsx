import { Grid } from '@material-ui/core'
import React from 'react'
import ContentHeader from '../component/ContentHeader'
import InputField from '../component/InputField'

const ContactContainer = () => {
    return (
        <div>
            <ContentHeader title={'Contact'}></ContentHeader>
            <Grid container xs={12} md={6} justifyContent='center' alignItems='center' style={{ backgroundColor: 'whitesmoke',padding : 30 }}>
                <Grid item>
                    <InputField vlaue="5"></InputField>
                </Grid>
            </Grid>
            <Grid xs={12} md={6}></Grid>
        </div>
    )
}

export default ContactContainer
