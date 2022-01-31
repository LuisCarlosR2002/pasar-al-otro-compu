import { Observable, Observer, Subscriber } from 'rxjs'


//Creacion de observable metodo estatico ccasi sin uno
// const obs$ = Observable.create()


const observer:Observer<any> = {
    next: value => console.log('Siguiente [next] ', value),
    error: error => console.warn('error[obr]: ',error),
    complete : () => console.info('Comlpletado [obr]')
}

//Creacion del obsevable
const obs$ = new Observable<string>( subs => {
    
    subs.next('Hola');
    subs.next('Mundo');

    //forzar un error
    // const a  = undefined;
    // a.nombre = 'Luis';


    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe( observer);

// obs$.subscribe(
//     valor => console.log('Next:', valor),
//     error => console.warn('error:',error),
//     () => console.info('Completado')
// );