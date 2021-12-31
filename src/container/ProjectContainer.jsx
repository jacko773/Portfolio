import React from 'react'
import ProjectDetails from '../component/ProjectDetails'
import Grid from '@material-ui/core/Grid';
import ContentHeader from '../component/ContentHeader';

const projects = {
    "professional_project": [
        { title: 'TATA AIG Motor Insurance', from: 'Dec 2017', to: 'Jan 2020', details: 'Web Application for registration and processing of motor insurance.' },
        { title: 'TATA AIG Health Insurance', from: 'Jan 2020', to: 'June 2021', details: 'Web Application for registration and processing of health insurance.' },
        { title: 'TATA AIG Tavel Policy', from: 'Jan 2020', to: 'June 2021', details: 'Web Application for travel insurance policy generation.' },
        { title: 'Managed Fixed Services', from: 'June 2021', to: 'Present', details: 'Web Application for managing and monitoring trading Fix Engine.'},
    ],
    // "personal_project" :[
    //     { title, from, to, details },
    // ]
}


const ProjectContainer = () => {
    return (
        <Grid container spacing={1}>
            <ContentHeader title={'Project'} />
            {projects.professional_project.map(project =>
                <Grid item xs={12} sm={6} md={3}>
                    <ProjectDetails title={project.title} from={project.from} to={project.to} details={project.details} ></ProjectDetails>
                </Grid>
            )}
        </Grid>
    )
}

export default ProjectContainer
