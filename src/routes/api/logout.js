import * as api from 'api.js';

export function post(req, res) {
    console.log(555);
    api.del('sessions', req.session.token).then(response => {
        delete req.session.token;
        res.end(JSON.stringify(response));
    });
}