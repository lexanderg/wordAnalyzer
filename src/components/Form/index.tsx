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
                {FormViewFactory.create(props.view)}
                <Typography style={{ fontFamily: 'Special Elite', padding: 5, fontSize: 15, position: 'absolute', bottom: 0, right: 0 }} variant="h3" component="h3" className="mainTitle">
                    Showcase by Alexander Gomez
            </Typography>
            </div>
    );
};

const mapStateToProps = (state: any) => ({ loader: state.application.loader, view: state.form.view });

export default connect(mapStateToProps)(Form);