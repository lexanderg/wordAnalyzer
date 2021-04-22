import React from 'react';
// External libs
import { Button } from '@material-ui/core';
import { TextFields } from '@material-ui/icons';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
//local components
import TextInput from '../../../TextInput';
// enumos
import { FormView } from '../../../../enums/FormView';
//redux
import { clearFrequencyState, setFormView, setText } from '../../../../redux/actions/form';
// interfaces
import { IDefaultView } from '../../../../lib/interfaces/IDefaultView';
//styles
import './Default.css';

// clean state - move to results view
const cleanFrequencyStateAndGoToResultsView = (dispatch: any) => {
    dispatch(clearFrequencyState());
    dispatch(setFormView(FormView.RESULTS_VIEW));
}

// component that renders main input text form
const DefaultView: React.FunctionComponent<IDefaultView> = (props: IDefaultView) => {

    const isAnalizedButtonEnabled: boolean = props.text.length > 0;

    return (
        <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 0.4 }} className='textFieldContainer'>
            <TextInput onTextChange={(newText: string) => props.dispatch && props.dispatch(setText(newText))} />
            <Button
                disabled={!isAnalizedButtonEnabled}
                variant="contained"
                color="primary"
                onClick={() => props.dispatch && cleanFrequencyStateAndGoToResultsView(props.dispatch)}
                endIcon={<TextFields />}>
                Analyze
            </Button>
        </motion.div>
    );
};

// redux state to props
const mapStateToProps = (state: any) => ({ text: state.form.text });

export default connect(mapStateToProps)(DefaultView);