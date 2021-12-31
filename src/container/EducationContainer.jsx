import React from 'react'
import Grid from '@material-ui/core/Grid'
import ContentHeader from '../component/ContentHeader'
import CustomStepper from '../component/CustomStepper'

const educationSteps = [
    { label: 'Jawahar Navodaya Vidyalaya, Nawanagar Buxar', timeStamp: 'Aug 2005 - July 2010', subtitle: 'Secondary School Examination(10th),9.6 CGPA (CBSE)', contentID: 'BTECH' },
    { label: 'Raj English School,Varanasi', timeStamp: 'Aug 2010 - July 2012', subtitle: 'Senior School Certificate Examination(12th).77% (CBSE)', contentID: 'BTECH' },
    { label: 'FGIET, Raebareli India', timeStamp: 'Aug 2013 - July 2017', subtitle: 'Bachelor of Technology, Computer Science 71.28%', contentID: 'BTECH' }
]
const EducationContainer = () => {
    return (
        <Grid container spacing={1}>
            <ContentHeader title={'Education'}></ContentHeader>
            <Grid item xs={12} sm={6} md={6} style={{ marginTop: 30 }}>
                <CustomStepper steps={educationSteps} stepsID="EDUCATION"></CustomStepper>
            </Grid>
        </Grid>
    )
}

export default EducationContainer
