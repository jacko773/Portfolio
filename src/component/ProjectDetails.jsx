import React from 'react'
import Box from '@material-ui/core/Box';
import CustomCard from './CustomCard';

const ProjectDetails = ({ title, from, to, details }) => {
    return (
        <div data-aos="fade-in">
            <CustomCard color="blue">
                <div>
                    <Box component="span" m={1} style={{textDecoration : 'underline' , textDecorationColor : 'ac'}}>
                        {title}
                    </Box>
                </div>
                <div style={{marginTop : 15}}>
                    <Box m={1}>
                        {details}
                    </Box>
                </div>
                <div style={{marginTop : 15}}>
                    <Box component="span" m={1}>
                        from
                    </Box>
                    <Box component="span" m={5}>
                        to
                    </Box>
                </div>
                <div style={{marginTop : 2}}>
                    <Box component="span" m={1}>
                        {from}
                    </Box>
                    <Box component="span" m={1}>
                        {to}
                    </Box>
                </div>
            </CustomCard>
        </div>
    )
}

export default ProjectDetails
