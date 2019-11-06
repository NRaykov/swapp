import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? 'Bearer ' + token : '',
        },
    };
});

export default authLink;