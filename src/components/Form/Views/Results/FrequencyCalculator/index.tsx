import React from 'react';
// External libs
import { Avatar, Divider, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
// local components
import SubmitWordForm from '../SubmitWordForm';
import FrequencyCalculatorResults from '../FrequencyCalculatorResults';
// redux
import { calculateFrequency, clearFrequencyState, setWordToCalculateFrequency } from '../../../../../redux/actions/form';
// local assets
import frequencyTextIcon from '../../../../../assets/text-tool.png';
import { IFrequencyCalculator } from '../../../../../interfaces/IFrequencyCalculator';
// styles
import '../Results.css';


// component that renders frequency calculator widget
const FrequencyCalculator: React.FunctionComponent<IFrequencyCalculator> = (props: IFrequencyCalculator) => {

    // local state to manage frecuency word 
    const [wordToCalculate, setWordToCalculate] = React.useState<string>(props.wordToCalculateFrequency);

    const wordToCalculateHasChanged: boolean = !(wordToCalculate === props.wordToCalculateFrequency);
    const frequencyIsCalculated: boolean = (props.calculatedFrequency !== undefined) && (wordToCalculate.length > 0);

    return (
        <Paper elevation={1} className="detailsWrapper">
            <div className="detailsHeader">
                <Avatar variant="square" alt="Frequency" src={frequencyTextIcon} />
                <Typography variant="button">Frequency Calculator</Typography>
            </div>
            <Divider variant="middle" />
            <div className='frequencyDescription' >
                <Typography color="textSecondary" variant="caption">Type a word to find its frequency</Typography>
            </div>
            <SubmitWordForm wordToCalculateFrequency={wordToCalculate}
                onChange={(ev) => setWordToCalculate(ev.target.value.trim().replace(/[^A-Za-z]+/g, ''))}
                onKeyDown={(e) => checkEnteredText(e, props.dispatch, wordToCalculate)}
                onSubmit={() => submitWord(wordToCalculate, props.dispatch)}
            />
            {
                (frequencyIsCalculated && !wordToCalculateHasChanged) &&
                <FrequencyCalculatorResults wordToCalculateFrequency={props.wordToCalculateFrequency}
                    calculatedFrequency={props.calculatedFrequency}
                    wordAsImageUrl={props.wordAsImageUrl} />
            }
        </Paper>
    );
};

// detect Enter to submit word
const checkEnteredText = (e: React.KeyboardEvent<HTMLDivElement>, dispatch: any, wordToCalculate: string) => {
    (e.key === "Enter") && submitWord(wordToCalculate, dispatch);
}

// dispatch redux actions when submitting word for frequency calculation
const submitWord = (wordToCalculate: string, dispatch: any) => {
    dispatch(clearFrequencyState());
    dispatch(setWordToCalculateFrequency(wordToCalculate));
    dispatch(calculateFrequency());
}

// redux state to props
const mapStateToProps = (state: any) => ({
    text: state.form.text,
    wordToCalculateFrequency: state.form.wordToCalculateFrequency,
    wordAsImageUrl: state.form.wordAsImageUrl,
    calculatedFrequency: state.form.calculatedFrequency
});

export default connect(mapStateToProps)(FrequencyCalculator);