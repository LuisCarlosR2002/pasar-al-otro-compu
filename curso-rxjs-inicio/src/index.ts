import { Observable, Observer, Subscriber } from 'rxjs'


//Creacion de observable metodo estatico ccasi sin uno
// const obs$ = Observable.create()


const observer:Observer<any> = {
    next: value => console.log('Siguiente [next] ', value),
    error: error => console.warn('error[obr]: ',error),
    complete : () => console.info('Comlpletado [obr]')
}

const intervalo$ = new Observable<number>( subs => {

    let cont:number = 0;
    const interval = setInterval( () => {
        subs.next(cont+=1);
    },1000)

    setTimeout(() => {
        
        subs.complete();

    }, 2500);

    return () => {

        clearInterval(interval);
        console.log('Intervalo destruido');
        
    }

})

const subs = intervalo$.subscribe(observer);
const subs1 = intervalo$.subscribe(observer);

subs.add(subs1);

setTimeout(() => {
    subs.unsubscribe();
    console.log('Completado TimeOut');
}, 6000);