import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
    iconFilled: {
      color: '#28a745',
    }
  })(Rating);

const SkilsRating = ({title,value}) => {
    return (
        <div>
            <Box component="span">
                {title}
            </Box>
            <Box component="span" style={{float : 'right'}}>
                <StyledRating value={value} precision={0.5} readOnly></StyledRating>
            </Box>
        </div>
    )
}

export default SkilsRating
