import {defer} from 'rxjs/observable/defer';

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
