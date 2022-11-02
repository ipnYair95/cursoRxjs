import { fromEvent } from "rxjs";

//observable por eventos
const src1 = fromEvent<MouseEvent>( document, 'click' );
const src2 = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
    next: (val) => console.log("next", val)
}

src1.subscribe( ev =>{

    console.log(ev.x, ev.y);

});

src2.subscribe( evento =>{
    console.log( evento.key );
});