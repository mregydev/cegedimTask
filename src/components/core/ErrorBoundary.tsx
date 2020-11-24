import React from 'react'

import { Error } from '@material-ui/icons';

interface ErrorBoundaryProps {
    errorMsg?: string
}

class ErrorComponent extends React.Component<ErrorBoundaryProps>{
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error + " " + errorInfo)
    }

    render() {
        if (this.state["hasError"]) {
            return <h1><Error />{this.props.errorMsg || "Something went wrong"}</h1>;
        }

        return this.props.children;
    }
}


export default ErrorComponent