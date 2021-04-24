import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from '../../api/movies.service';

@Injectable()
export class MoviesWriteResolveService implements Resolve<Observable<any>> {

  constructor(
    private service: MoviesService,
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | any {
    const id: string = route.paramMap.get('id');
    console.log('[MoviesWriteResolveService] :id =>', id)
    if (id == 'create') {
      return of(false)
    } else {
      // return this.service.getMovie(id);
    }

  }
}
