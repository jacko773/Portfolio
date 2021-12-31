import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Hidden from '@material-ui/core/Hidden'
import ContentHeader from '../component/ContentHeader'
import ArrowRight from '@material-ui/icons/ArrowRight'

const About = [

    { key: 'Name', value: 'Vinay Kumar' },
    { key: 'Position', value: 'Software Engineer' },
    { key: 'Company name', value: 'Itiviti india pvt ltd' },
    { key: 'Birthday', value: '05-02-1994' },
    { key: 'Age', value: '27' },
    { key: 'Degree', value: 'B.TECH' },
    { key: 'Phone', value: '7996869853' },
    { key: 'Email', value: 'Vinay308080@gmail.com' },
    { key: 'City', value: 'Mumbai, India' },
    { key: 'Freelance', value: 'Available' },
]

const AboutContainer = () => {
    return (
        <Grid container spacing={2}>
            <ContentHeader title={'About'}></ContentHeader>
            {/* <Hidden xsDown>
                <Grid item md={3}>
                </Grid>
            </Hidden> */}
            <h4 style={{ color: 'blue' }}> I'm a software engineer having experience in software development, Application
                Programming, Web Development, Requirement Gathering, Application
                Support, Design Development. I Have developed 3 successful Insurance based web apps for TATA-AIG, and currently working on
                Managed fix service(MFS) project at Itiviti India Private Limited. This application is used for managing and monitoring
                trading fix servers.
                Also, I had the experience of leading a team of 7 members.</h4>
            <Grid item md={12}>
                <Grid container spacing={2} className='margin_top'>
                    {About.map(about => <Grid item xs={12} md={4} xl={4} className="About_keyPoints">
                        <ArrowRight className="material-icons"></ArrowRight> <span className="icon_text"> <strong> {about.key} </strong> : {about.value}</span>
                    </Grid>)}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutContainer
