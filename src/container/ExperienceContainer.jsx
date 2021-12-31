import React from 'react'
import Grid from '@material-ui/core/Grid'
import ContentHeader from '../component/ContentHeader'
import CustomStepper from '../component/CustomStepper'

const professionalExpSteps = [
    { label: 'Dark Horse Digital, Hyderabad India', timeStamp: 'Dec 2017 - June 2021', subtitle: 'Software Consultant', contentID: 'SOFTCONSULT' },
    { label: 'Itiviti india pvt ltd, Mumbai India', timeStamp: 'June 2021 - Present', subtitle: 'Software Engineer', contentID: 'SOFTENG' }
]

const ExperienceContainer = () => {
    return (
        <Grid container spacing={1}>
            <ContentHeader title={'Professional Experience'}></ContentHeader>
            <Grid item xs={12} sm={6} md={6} style={{ marginTop: 30 }}>
                <CustomStepper steps={professionalExpSteps} stepsID="EXPERIENCE"></CustomStepper>
            </Grid>
        </Grid>
    )
}

export default ExperienceContainer
