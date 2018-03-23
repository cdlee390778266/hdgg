import { Injectable } from '@angular/core';
import { LoadingComponent } from './loading.component';

@Injectable()
export class LoadingService {

  constructor() { }

  public static loading: LoadingComponent;

  open(): void {
    LoadingService.loading.open();
  }

  close(): void {
    LoadingService.loading.close();
  }

}
