import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus mi id mauris ornare, id convallis odio vestibulum. Etiam dapibus cursus elementum. Vivamus dui neque, blandit nec purus ac, interdum posuere libero. Nam venenatis vehicula sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla aliquet nisl a mi laoreet gravida. Suspendisse vestibulum, diam id bibendum laoreet, purus justo malesuada lectus, vitae congue risus nunc ac velit. Suspendisse ligula nibh, pellentesque a porta ut, feugiat nec odio. Proin aliquam vulputate massa sollicitudin convallis. Pellentesque semper sem a velit molestie, vel pretium nisi faucibus.
<br/><br/>
Aenean vel venenatis sem. In ac iaculis ante, ut consequat est. Nunc mattis auctor dui ac cursus. Maecenas ornare purus in est commodo, eget rutrum leo sagittis. Etiam imperdiet id velit vitae consectetur. Curabitur placerat, arcu ut cursus ultrices, metus ipsum bibendum tellus, vitae aliquet lectus lectus non ligula. Morbi velit metus, dapibus et sapien aliquet, cursus sodales quam. Nulla laoreet arcu vel malesuada posuere.
<br/<br/>
Nullam in est ac enim efficitur tempus. Proin sollicitudin lobortis justo. Fusce congue lectus a ipsum ullamcorper tempor. Ut feugiat nulla vulputate metus tristique dapibus. Nunc sagittis turpis vel nisl imperdiet egestas ut a velit. Morbi convallis sem lorem. Integer consequat nibh ut ligula suscipit auctor ut ut nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/<br/>
Maecenas euismod odio nec risus viverra malesuada. Praesent convallis orci libero. Aenean luctus velit eu mauris ultricies tincidunt. Donec tristique sapien ac erat accumsan maximus. Nullam efficitur bibendum ante, vel rhoncus nulla tempus ac. Integer eget vulputate mi, vitae ultricies eros. Vivamus tempus ornare ipsum vel porttitor. Fusce est dui, ornare ut ipsum in, venenatis tincidunt purus. Nulla facilisi. Donec congue odio ante, vel aliquet dolor porttitor non.
<br/<br/>
Sed eget dapibus massa. Nunc sollicitudin est odio, non vehicula est iaculis molestie. Mauris vestibulum purus erat. Donec id sagittis sem. Nunc quis nisl quam. Curabitur malesuada congue posuere. Maecenas risus velit, euismod non efficitur convallis, hendrerit nec turpis. Integer euismod tortor eu porttitor imperdiet. Phasellus et nisl diam. In quis ultrices erat. Aenean volutpat velit at sapien rhoncus ornare. Fusce porttitor lorem eu purus euismod mollis. Phasellus commodo condimentum faucibus. Aenean auctor metus elementum libero dignissim, semper tempor velit aliquam. Ut maximus sem ut massa fringilla, at fermentum nisl accumsan.
<br/<br/>
Integer ac nisi aliquet, vestibulum justo id, aliquet metus. Vestibulum interdum velit quis mauris interdum fermentum. Fusce sit amet porttitor leo. Donec ultrices efficitur nulla. Nullam gravida consequat nisi id euismod. Donec massa turpis, laoreet non tempor ac, suscipit et sem. Vivamus a iaculis sapien. Suspendisse porttitor libero a elit mollis iaculis.
<br/<br/>
Mauris venenatis ligula id est sollicitudin, sed lobortis quam rhoncus. Suspendisse quam sapien, volutpat nec tempor ac, lobortis a lorem. Quisque bibendum, ipsum eget porta bibendum, elit lacus vestibulum orci, ac venenatis lectus velit vel ante. Vivamus ac auctor nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac porta turpis. Aliquam consequat sit amet quam a semper. Donec a sodales neque. Curabitur ligula risus, sagittis ac magna a, consectetur fermentum nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non luctus nunc. Sed mattis augue faucibus tellus sagittis venenatis. Vestibulum lorem elit, ultricies et leo et, imperdiet pulvinar ipsum. Aliquam malesuada iaculis ultrices.
<br/<br/>
Nulla lorem lorem, blandit ac felis non, egestas dapibus purus. Donec semper urna pellentesque ex scelerisque pulvinar. Nulla luctus lectus at ligula suscipit commodo. Nunc blandit ac ligula ut dapibus. Pellentesque sodales elementum nulla quis condimentum. Quisque mollis erat urna, vitae porta tortor pretium quis. Aenean lacinia fermentum dolor, id placerat mi blandit vitae. Proin eu ultricies nisi. In ut justo mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse at volutpat sem.
<br/<br/>
Sed bibendum tortor at nulla egestas, vitae egestas massa viverra. Aliquam egestas efficitur vulputate. Nullam dapibus scelerisque posuere. Donec dictum hendrerit dui, quis porta mauris auctor sit amet. Suspendisse ut elit vel purus bibendum condimentum. Mauris faucibus, tellus id vehicula vulputate, orci purus faucibus tellus, vel condimentum mi lectus at ipsum. Sed bibendum posuere purus, non convallis mauris vulputate eget. Donec varius nunc eget velit mattis, nec iaculis erat pretium.
<br/<br/>
Nulla feugiat fermentum elit, vitae accumsan orci convallis eget. Quisque eu pulvinar turpis. Praesent viverra posuere iaculis. Duis libero velit, consectetur sit amet nibh sit amet, fringilla egestas justo. Fusce porttitor luctus euismod. Quisque nec tortor et nibh dignissim egestas vitae id elit. Donec accumsan quis ante quis eleifend. Vivamus bibendum leo urna, id hendrerit ex dapibus sit amet. Pellentesque lobortis mi arcu, vel auctor leo suscipit sit amet. Phasellus sodales metus vitae volutpat efficitur. Nunc vitae mi quis tortor consequat vestibulum. Quisque et hendrerit lacus. Aenean dictum non dui id commodo. Suspendisse ultrices eget libero vitae iaculis. Vestibulum iaculis ipsum quis turpis imperdiet, id varius augue tincidunt.
`;

const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//function del calculo

const calcularPorcentajeScroll = (event) => {

    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//streams

const scroll$ = fromEvent(document, 'scroll');
scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap( console.log )
).subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});



