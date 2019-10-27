import React from 'react';
import Login from '../../components/Login/Login.js';
import { isAuthenticated, signout } from '../../guards/auth.js';
import { withRouter } from 'react-router-dom';

const Characters = withRouter(({ history }) =>
            isAuthenticated ? (
                    <React.Fragment>
                        <h1>Characters</h1>
                    </React.Fragment>

            ) : ( <Login/> ),
        );
export default Characters;
