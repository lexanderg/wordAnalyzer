import React from 'react';

// External libs
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

// Local libs
import { WordFrequencyAnalyzerHelper } from '../../lib/WordFrecuencynalyzerHelper';

// Interfaces
import { ITextInput } from '../../interfaces/ITextInput';

// Styles
import './TextInput.css';


const wordFrequencyAnalyzerHelper: WordFrequencyAnalyzerHelper = new WordFrequencyAnalyzerHelper();

// component used to fill in word to calculate frequency
const TextInput: React.FunctionComponent<ITextInput> = (props: ITextInput) => {

    const totalAmountOfWords: number = wordFrequencyAnalyzerHelper.countWordsInText(props.text);
    const displayCounter: boolean = totalAmountOfWords > 0;

    return (
        <div className='textInputWrapper'>
            <TextField
                autoComplete="off"
                id="word-analyzer-text-field"
                label="Fill in your text..."
                multiline
                rows={4}
                rowsMax={10}
                onChange={(ev) => props.onTextChange(ev.target.value)}
                defaultValue={String(props.text)}
                variant="outlined"
            />
            <Typography className='wordCounterParagraph' gutterBottom>
                {displayCounter && 'word counter : ' + totalAmountOfWords}
            </Typography>
        </div>
    );
};

const mapStateToProps = (state: any) => ({ text: state.form.text });

export default connect(mapStateToProps)(TextInput);