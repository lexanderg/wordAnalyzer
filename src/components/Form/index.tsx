import React from 'react';
// External libs
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

// local componets
import AppLoader from '../Loader';

// interfaces
import { IForm } from '../../interfaces/IForm';

// factories
import { FormViewFactory } from '../../factories/FormViewFactory';

// Styles
import './Form.css';

const Form: React.FunctionComponent<IForm> = (props: IForm) => {
    return (
        props.loader.isLoading ?
            <AppLoader />
            :
            <div className='formWrapper'>
                <Typography style={{ fontFamily: 'Dancing Script', padding: 20 }} variant="h3" component="h3" className="mainTitle">
                    The WordAnalyzer
                </Typography>
                <Typography style={{ fontFamily: 'Special Elite', fontSize: 14, paddingBottom: 5 }} variant="h3" component="h3" className="mainTitle">
                    Showcase by Alexander Gomez
                </Typography>
                {FormViewFactory.create(props.view)}

            </div>
    );
};

const mapStateToProps = (state: any) => ({ loader: state.application.loader, view: state.form.view });

export default connect(mapStateToProps)(Form);