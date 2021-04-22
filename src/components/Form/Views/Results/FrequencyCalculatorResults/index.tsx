import React from 'react';
// External libs
import { Avatar, Typography } from '@material-ui/core';

// styles
import '../Results.css';
import { useStyles } from '../AvatarStyles';
import { IFrequencyCalculatorResults } from '../../../../../interfaces/IFrequencyCalculatorResults';


// component that renders frequency calculator widget results
const FrequencyCalculatorResults: React.FunctionComponent<IFrequencyCalculatorResults> = (props: IFrequencyCalculatorResults) => {

    const avatarClasses = useStyles();
    const frequencyWordImageExists: boolean = props.wordAsImageUrl.length > 0;

    // local state to manage frecuency word 
    return (
        <div className="calculatedFrequencyDetails">
            <div className="resultsTextWrapper">
                <Typography variant="overline">
                    found
                </Typography>
                <Avatar style={{ backgroundColor: 'green', margin: 5 }}>{props.calculatedFrequency}</Avatar>
                <Typography variant="overline">
                    time(s)
            </Typography>
            </div>
            <div className="imageResultsContainer">
                {frequencyWordImageExists &&
                    <Typography variant="caption">and here is an image of it ;-)</Typography>}
                <Avatar className={avatarClasses.large}
                    alt={props.wordToCalculateFrequency}
                    src={props.wordAsImageUrl}>{props.wordToCalculateFrequency.toUpperCase()}</Avatar>
            </div>
        </div>
    );
};


export default (FrequencyCalculatorResults);