import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { SearchService } from './search.service';
import { loadDist, loadDistSuccess } from './state/list_of_districts/districtList.action';
import { loadState, loadStateSuccess } from './state/list_of_states/stateList.action';
import { loadSessions, loadSessionsByDistricts, loadSessionsSuccess, loadSessionsSuccessByDistricts } from './state/pin.action';


@Injectable()

export class SearchEffects {
    constructor(private service: SearchService, private action: Actions) { }
    effectName2$ = createEffect(
        () => this.action.pipe(
            ofType(loadSessions), exhaustMap((action) => {
                return this.service.getSessionsByPin(action.pin, action.date).pipe(map((districts) => {
                    // console.log(districts);
                    return loadSessionsSuccess(districts);
                }));
            })
        )
    );

    effectName$ = createEffect(() => this.action.pipe(ofType(loadState), exhaustMap((action) => {
        return this.service.getStates().pipe(map((states) => {
            return loadStateSuccess(states);
        }));
    })));

    effectName3$ = createEffect(
        () => this.action.pipe(
            ofType(loadDist), exhaustMap((action) => {
                return this.service.getDistricts(action.id).pipe(map((districts) => {
                    // console.log(districts)
                    return loadDistSuccess(districts);
                }));
            })
        )
    );
    effectName4$ = createEffect(
        () => this.action.pipe(
            ofType(loadSessionsByDistricts), exhaustMap((action) => {
                return this.service.getSessionsByDistricts(action.id, action.date).pipe(map((sessions) => {
                    // console.log(districts);
                    return loadSessionsSuccessByDistricts(sessions);
                }));
            })
        )
    );
}
