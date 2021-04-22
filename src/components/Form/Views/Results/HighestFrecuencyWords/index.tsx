import { Avatar, createStyles, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import React from 'react';

// external libs
import { connect } from 'react-redux';

//local libs
import { WordFrequencyAnalyzerHelper } from '../../../../../lib/WordFrecuencynalyzerHelper';

//local assets
import trophy from '../../../../../assets/pulse.png';

// interfaces
import { IWordFrequency } from '../../../../../lib/interfaces/IWordFrequency';
import { top20Colors } from '../../../../../constants/TopFrecuencyColors';


//styles
import '../Results.css';
import { IHighestFrequencyWords } from '../../../../../interfaces/IHighestFrequencyWords';
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

const wordFrequencyAnalyzerHelper: WordFrequencyAnalyzerHelper = new WordFrequencyAnalyzerHelper();

// component that renders the highest frequency words widget
const HighestFrequencyWords: React.FunctionComponent<IHighestFrequencyWords> = (props: IHighestFrequencyWords) => {

    const classes = useStyles();
    const mostFrequentWords: IWordFrequency[] = wordFrequencyAnalyzerHelper.getMostFrecuentWordsFromText(props.text);

    return (
        <Paper elevation={1} className="detailsWrapper">
            <div className="detailsHeader">
                <Avatar variant="square" alt="Winners" src={trophy} />
                <Typography variant="button">Highest Frequency Words</Typography>
            </div>
            <Divider variant="middle" />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root} >
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
                    mostFrequentWords.map((word, index) => {
                        return (
                            <ListItem button key={word.getWord() + "_" + word.getFrequency() + "__li"}>
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

export default connect(mapStateToProps)(HighestFrequencyWords);