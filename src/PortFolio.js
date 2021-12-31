import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { makeStyles } from '@material-ui/core/styles';
import HomeContainer from './container/HomeContainer';
import AboutContainer from './container/AboutContainer';
import SkilsContainer from './container/SkilsContainer';
import ProjectContainer from './container/ProjectContainer';
import ContactContainer from './container/ContactContainer';
import EducationContainer from './container/EducationContainer';
import Grid from '@material-ui/core/Grid'
import MapContainer from './container/MapContainer';
import ExperienceContainer from './container/ExperienceContainer';
const useStyles = makeStyles({
    content_box_light_blue: {
        padding: 30,
        backgroundColor: '#ECF9F9'
    },
    content_box_white: {
        padding: 30,
    },
    content_box_black: {
        padding: 30,
        backgroundColor: '#212F3D',
        color: 'white'
    },
});

const PortFolio = () => {
    const classes = useStyles();
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <Grid id="home" className="home" data-aos="fade" container justifyContent="center" alignItems="center">
                <HomeContainer></HomeContainer>
            </Grid>
            <div id="about" className={classes.content_box_light_blue} data-aos="fade-in">
                <AboutContainer></AboutContainer>
            </div>
            <div id="education" className={classes.content_box_white} data-aos="fade-in">
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <EducationContainer></EducationContainer>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <ExperienceContainer></ExperienceContainer>
                    </Grid>
                </Grid>
            </div>
            <div id="skils" className={classes.content_box_light_blue} data-aos="fade-in">
                <SkilsContainer></SkilsContainer>
            </div>
            <div id="project" className={classes.content_box_white} data-aos="fade-in">
                <ProjectContainer></ProjectContainer>
            </div>
            {/* <div id="map" data-aos="fade-in">
                <MapContainer></MapContainer>
            </div> */}
            {/* <div id="contact" className={classes.content_box_black} data-aos="fade-in">
                <ContactContainer></ContactContainer>
            </div> */}
        </>
    )
}

export default PortFolio
