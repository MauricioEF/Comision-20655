import {Observable,filter,map} from 'rxjs';
let observable = new Observable(observer=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.next(6);
    observer.next(7);
    observer.next(8);
})


let observer = observable.pipe(
    filter(data=>data>2),
    map(data=>data*2)
)
let observer2 = observable.subscribe({
    next:(val)=>console.log(val)
})
observer.subscribe({
    next:(val)=>console.log(val)
})