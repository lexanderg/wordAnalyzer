import React from 'react';

//External libs
import { Avatar, Button, Paper } from '@material-ui/core';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { Refresh } from '@material-ui/icons';
import Highlighter from "react-highlight-words";

// local libs
import { WordFrequencyAnalyzerHelper } from '../../../../lib/WordFrecuencynalyzerHelper';
import HighestFrecuencyWords from './HighestFrecuencyWords';

// local components
import TopWords from './TopWords';
import FrequencyCalculator from './FrequencyCalculator';

// redux
import { clearTexxt, setFormView } from '../../../../redux/actions/form';

// constants
import { FormView } from '../../../../enums/FormView';

// interfaces
import { IResultsView } from '../../../../interfaces/IResultsView';

//local assets
import results from '../../../../assets/results.png';

// styles
import './Results.css';
import { IHighligherProps } from '../../../../interfaces/IHighligherProps';

const wordFrequencyAnalyzerHelper: WordFrequencyAnalyzerHelper = new WordFrequencyAnalyzerHelper();


const cleanStateAndGoToDefaultView = (dispatch: any) => {
    dispatch(clearTexxt());
    dispatch(setFormView(FormView.DEFAULT_VIEW));
}

const setHighlighterTextProps = (props: IResultsView): IHighligherProps => {
    // add extra spaces to simulate handlighted effect
    let textToHighlight = " " + props.text + " ";
    return { textToHighlight };
}

// component that contains rendered text and calculation widgets
const ResultsView: React.FunctionComponent<IResultsView> = (props: IResultsView) => {

    return (
        <motion.div transition={{ duration: 0.4 }} animate={{ scale: [1, 1.1, 1] }} className='resultsContainer'>
            <div className="paperWrapper">
                <Avatar variant="square" alt="Winners" src={results} />
                <Paper elevation={3} className='paperContainer'>
                    <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={wordFrequencyAnalyzerHelper.getHighlightedWordsInText(props.text, props.wordToCalculateFrequency)}
                        autoEscape={true}
                        caseSensitive={true}
                        textToHighlight={setHighlighterTextProps(props).textToHighlight}
                    />
                </Paper>
            </div>
            <div className="detailedResultsWrapper">
                <TopWords />
                <HighestFrecuencyWords />
                <FrequencyCalculator />
            </div>
            <div className="startAgainButtonWraper">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.dispatch && cleanStateAndGoToDefaultView(props.dispatch)}
                    endIcon={<Refresh />}>
                    Start again
                </Button>
            </div>
        </motion.div>
    );
};


const mapStateToProps = (state: any) => ({
    text: state.form.text,
    wordToCalculateFrequency: state.form.wordToCalculateFrequency
});

export default connect(mapStateToProps)(ResultsView);