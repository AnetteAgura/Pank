import * as api from 'api.js';

export function post(req, res) {
    console.log(666);
    console.log(req.session);
    api.get('users/current', req.session.token).then(response => {
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(response));
    });
}