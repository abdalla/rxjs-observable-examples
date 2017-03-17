const Rx = require('rxjs/RX');
const fetch = require('node-fetch');

const getGitUser = (username) => {
    const uri = `https://api.github.com/users/${username}`;

    return fetch(uri);
};


getGitUser('abdalla');

const user$ = Rx.Observable
    .of('abdalla')
    .switchMap(userName => {
        return Rx.Observable.fromPromise(getGitUser(userName));
    });

const p$ = user$.mergeMap(res => res.text());

const mapped$ = p$.map(body => JSON.parse(body));

mapped$.subscribe(
    data => {
        console.log(data.name);
        console.log(data.public_repos);
    },
    err => {
        console.log(err);
    });