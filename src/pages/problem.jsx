import React from 'react';
import {Grid} from 'react-bootstrap';

import Output from '../components/Output.jsx';
import SubmissionInProgress from '../components/SubmissionInProgress.jsx';
import SubmissionDetails from '../components/SubmissionDetails.jsx';

export default class Problem extends React.Component{
    render() {
        if (!this.props.problems) {
            return null;
        }

        let problem = this.props.problems.find((problem) => problem.id === this.props.params.id);

        if (!problem) {
            return null;
        }

        const gridStyle = {
            margin: "0 25px"
        };

        return <Grid style={gridStyle}>
            <SubmissionDetails problem={problem} sourceCode={this.props.sourceCode} />
            <Output result={this.props.result}/>
            <SubmissionInProgress />
        </Grid>;
    }
}