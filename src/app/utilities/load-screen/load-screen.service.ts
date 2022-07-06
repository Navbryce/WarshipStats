import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class LoadScreenService {
  private activateLoadingReasonSource = new BehaviorSubject<string>("");
  private deactivateLoadingReasonSource = new BehaviorSubject<string>("");


  // observables for other classes
  activateObservable = this.activateLoadingReasonSource.asObservable();
  deactivateObservable = this.deactivateLoadingReasonSource.asObservable();


  constructor() { }

  activateLoadingWithReason (reason: string): void {
    this.activateLoadingReasonSource.next(reason);
  }

  deactivateLoadingWithReason (reason: string): void {
    this.deactivateLoadingReasonSource.next(reason);
  }

}
