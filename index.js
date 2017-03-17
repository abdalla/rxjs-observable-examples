const Rx = require('rxjs/RX');

const names = ['Carlos', 'Marcella', 'Mussum', 'Cacildis'];
const greeting = 'Hello';

const names$ = Rx.Observable.from(names);
const greeting$ = Rx.Observable.of(greeting);

// greeting$.subscribe(greeting => {
//     names$.subscribe(name => {
//         console.log(`${greeting} ${name}`);
//     });
// });

const mapped$ = greeting$.mergeMap(greeting => names$);
mapped$.subscribe(name => {
    console.log(`${greeting} ${name}`);
});