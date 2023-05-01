import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
    state = {hasError: false};

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            errorName: error.toString(),
            componentStack: info.componentStack
        });
        console.log(info)
    }

    render() {
        const {errorName, hasError} = this.state;
        return hasError ?
            <h2 className="center-message">Bad news. Error - {errorName}. </h2>
            : this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element
};

export default ErrorBoundary