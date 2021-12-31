import React from 'react';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
// import CastForEducationIcon from '@material-ui/icons/CastForEducation';
// import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AdjustIcon from '@material-ui/icons/Adjust';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const customStepIcon = (props) => {
    // switch (props.stepsID) {
    //     case 'SUMMARY':
    //         return <AdjustIcon className="resume_icon"/>
    //     case 'EDUCATION':
    //         return <CastForEducationIcon className="resume_icon"/>
    //     case 'EXPERIENCE':
    //         return <WorkOutlineIcon className="resume_icon"/>
    //     default:
    //         return <AdjustIcon className="resume_icon"/>
    // }
    return <AdjustIcon className="resume_icon material-icons" />
}
const CustomStepper = ({ steps, stepsID }) => {

    return (
        <div>
            <Stepper orientation="vertical" style={{ paddingTop: 0, paddingBottom: 0 }}>
                {steps.map((step, index) => (
                    <Step key={step.label} active={true}>
                        <StepLabel StepIconComponent={customStepIcon} StepIconProps={{ stepsID }}><h4 style={{ padding: 0, margin: 0 }}>{step.label}</h4><small>{step.subtitle}</small><br /><small>{step.timeStamp}</small></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default CustomStepper
