import React from 'react';
//External libs
import { Avatar, createStyles, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, TextField, Theme, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

// local libs
import { WordFrequencyAnalyzer } from '../../../../../lib';

// local assets
import trophy from '../../../../../assets/trophy.png';

//redux
import { calculateFrequency, clearFrequencyState, setWordToCalculateFrequency } from '../../../../../redux/actions/form';

// styles
import '../Results.css';

//interfaces
import { ITopWords } from '../../../../../interfaces/ITopWords';
import { IWordFrequency } from '../../../../../lib/interfaces/IWordFrequency';

// constants
import { top20Colors } from '../../../../../constants/TopFrecuencyColors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            overflow: 'auto',
            maxHeight: 220
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

const wordFrequencyAnalyzer: WordFrequencyAnalyzer = new WordFrequencyAnalyzer();

// dispatch redux actions when clicking a word for frequency calculation and display as highlighted
const onClickListItem = (wordToCalculate: string, dispatch: any) => {
    dispatch(clearFrequencyState());
    dispatch(setWordToCalculateFrequency(wordToCalculate));
    dispatch(calculateFrequency());
}

const TopWords: React.FunctionComponent<ITopWords> = (props: ITopWords) => {

    const [topNumberOfWords, setTopNumberOfWords] = React.useState<number>(3);

    const classes = useStyles();
    const wordFrequencyArray: IWordFrequency[] = wordFrequencyAnalyzer.calculateMostFrequentNWords(props.text, topNumberOfWords);

    return (
        <Paper elevation={1} className="detailsWrapper">
            <div className="detailsHeader">
                <Avatar variant="square" alt="Winners" src={trophy} />
                <Typography variant="button">Top</Typography>
                <TextField
                    autoComplete="off"
                    className="topWordsAmountTextField"
                    id="topWordsTextField"
                    defaultValue={topNumberOfWords}
                    onChange={(ev) => setTopNumberOfWords(Number(ev.target.value))}
                    label=""
                    InputProps={{
                        inputProps: { 
                            max: 100, min: 1 
                        }
                    }}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Typography variant="button">Words</Typography>
            </div>
            <Divider variant="middle" />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                <li>
                    <Typography
                        className='frequencyTitle'
                        color="textSecondary"
                        display="block"
                        variant="caption"
                    >
                        Frequency
                    </Typography>
                </li>
                {
                    wordFrequencyArray.map((word, index) => {
                        return (
                            <ListItem button key={word.getWord() + "_" + word.getFrequency() + "__li"} onClick={(ev) => onClickListItem(word.getWord(), props.dispatch)}>
                                <ListItemIcon>
                                    <Avatar style={{ backgroundColor: top20Colors[index] }}>{word.getFrequency()}</Avatar>
                                </ListItemIcon>
                                <ListItemText primary={word.getWord()} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </Paper>

    );
};


const mapStateToProps = (state: any) => ({ text: state.form.text });

export default connect(mapStateToProps)(TopWords);