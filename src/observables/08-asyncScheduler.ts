import { asyncScheduler  } from "rxjs";

/**
 * puede emular a estos
 */

/* setTimeout(() => {
    {}
}, 3000);

setInterval(()=>{

},1000); */

const saludar  = () =>{
    console.log("hola mundo");
}
const saludar2  = (nombre) =>{
    console.log(`HOla ${nombre}`);
}

//setimeout
//asyncScheduler.schedule( saludar, 2000 );
//asyncScheduler.schedule( saludar2, 2000, 'Yair' );

//interval, no puede sr una arrow
const subs = asyncScheduler.schedule( function(state, ){

    console.log('state',state);

    this.schedule( state + 1, 1000 );

}, 3000, 0);

/* setTimeout(() => {
    subs.unsubscribe();
}, 6000); */

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );

