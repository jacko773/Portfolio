import React from 'react'
import SkilsRating from '../component/SkilsRating'
import Grid from '@material-ui/core/Grid'
import ContentHeader from '../component/ContentHeader'

const skils = [
    { title: "React", value: 4.5 },
    { title: "JavaScript", value: 4.5 },
    { title: "Responsive web design", value: 4.5 },
    { title: "Angular", value: 4 },
    { title: "HTML", value: 4.5 },
    { title: "CSS", value: 4 },
    { title: "Material UI", value: 4.5 },
    { title: "BootStrap", value: 4.5 },
    { title: "SQL Server", value: 4 },
    { title: "MySql", value: 4 },
    { title: "Node Js", value: 3 },
    { title: "Spring Boot", value: 2 },
]


const SkilsContainer = () => {
    return (
        <Grid container spacing={2}>
            <ContentHeader title={'Skils'} />
            {skils.map((skil) =>
                <Grid item xs={12} sm={6} md={6}>
                    <SkilsRating title={skil.title} value={skil.value}></SkilsRating>
                </Grid>
            )}
        </Grid>
    )
}

export default SkilsContainer
