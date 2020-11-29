/* TODO: replace types "any" by more specific type */

import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isTokenInformed } from 'services/jwtService';


export interface ProtectedRouteProps extends RouteProps {
    component: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props: ProtectedRouteProps) => {
    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={props =>
                isTokenInformed() ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    )
            }
        />
    );
};

export default ProtectedRoute;
