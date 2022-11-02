import { ajax } from 'rxjs/ajax';


//https://api.github.com/usesssrs?per_page=5    
const url = `https://httpbin.org/delay/1`;

const obs$ = ajax.getJSON( url, {
    'Content-Type': 'application/json',
    'mi-token': 'abc123'
});

obs$.subscribe( data =>{
    console.log("data", data);
});