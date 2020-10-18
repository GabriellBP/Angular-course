import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {EventService} from "./event.service";
import {Observable, Observer} from "rxjs";

@Injectable({ providedIn: 'root' })
export class NameAvailableValidator implements AsyncValidator {
  constructor(private eventService: EventService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return new Observable((observer: Observer<ValidationErrors | null>) => {
      this.eventService.isNameAvailable(control.value).subscribe((available: boolean) => {
        if (!available)
          observer.next(null);
        else
          observer.next({nameAvailable: true});
        observer.complete();
      })
    });
  }

}
