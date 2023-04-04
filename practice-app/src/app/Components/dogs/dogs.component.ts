import { Component } from '@angular/core';
import { DogService } from 'src/app/Services/dog.service';
import { observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {


  divisibleByThreeObservable?: Observable<{isDivivisibleByThree: false, number: 0, update(): string}>;

  firstSubscription?: Subscription;

  subscriberOneValue: number = 0;
  isSubscriberOneDivisible?: boolean;
  currentMessage : string = "";

  constructor(private dogService: DogService) {
  }

  ngOnInit(){
    this.runObservableDemo();
  }

  callDogs(){
    var call1 = this.dogService.getDogs();

    var call2 = this.dogService.getDogs().subscribe();

    debugger;
    var call3 = this.dogService.getDogs().subscribe((data)=> {debugger}, (error)=> {console.log("error has ocurred")});
    
    var call4 = this.dogService.getDogs().subscribe({next: (data) => console.log(data)})



  }

  runObservableDemo(){
    // this.divisibleByThreeObservable = Observable.create((observer: any)=> {
    //   let localNumber = 0;
    //   setInterval(() => {
    //     if (localNumber % 3 === 0){
    //       observer.next({isDivivisibleByThree: true, number: localNumber, update() { debugger; return localNumber + " is divisible by 3"}})
    //     } else {
    //       observer.next({isDivivisibleByThree: false, number: localNumber, update() {return localNumber + " is NOT divisible by 3"}})
    //     }
    //     localNumber++;
    //   }, 1000)
    // })

    this.divisibleByThreeObservable = new Observable((observer: any)=> {
      let localNumber = 0;
      setInterval(() => {
        if (localNumber % 3 === 0){
          observer.next({isDivivisibleByThree: true, number: localNumber, update() { debugger; return localNumber + " is divisible by 3"}})
        } else {
          observer.next({isDivivisibleByThree: false, number: localNumber, update() {return localNumber + " is NOT divisible by 3"}})
        }
        localNumber++;
      }, 1000)
    })
  }

  //https://zeroesandones.medium.com/how-to-work-with-observables-in-angular-9-99884ceab56
  suscribe(){
    this.firstSubscription = 
    this.divisibleByThreeObservable?.subscribe({next :(data) => {
      this.currentMessage = data.update();
    }})
  }

  unsuscribe(){
    this.firstSubscription?.unsubscribe();
  }
  
}
