import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { SearchService } from "./search.service";
import { loadSessions, loadSessionsSuccess } from "./state/pin.action";


@Injectable()

export class SearchEffects {
    constructor(private service: SearchService, private action: Actions) { }
    effectName2$ = createEffect(
        () => this.action.pipe(
            ofType(loadSessions), exhaustMap((action) => {
                return this.service.getSessionsByPin(action.pin, action.date).pipe(map((districts) => {
                    console.log(districts)
                    return loadSessionsSuccess(districts)
                }))
            })
        )
    )
}