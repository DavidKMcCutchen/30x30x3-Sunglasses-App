import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Sunglasses } from "@sunglasses/api-interfaces";
import { NotificationsService, SunglassesService } from "@sunglasses/core-data";
import { take, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class SunglassesFacade {
    _allSunglassesSource$ = new BehaviorSubject<Sunglasses[]>([]);
    allSunglasses$: Observable<Sunglasses[]> = this._allSunglassesSource$.asObservable();

    private _selectedSunglassSource$ = new BehaviorSubject<Sunglasses>({} as Sunglasses);
    selectedSunglass$: Observable<Sunglasses> =
    this._selectedSunglassSource$.asObservable();

    constructor(
        private sunglassesService: SunglassesService,
        private notificationsService: NotificationsService
    ) {}

    loadSunglasses() {
        this.sunglassesService
            .all()
            .pipe(
                tap((sunglasses) => this._allSunglassesSource$.next(sunglasses)),
                take(1)
            )
            .subscribe()
    };

    selectSunglass(sunglassId: string) {
        this.sunglassesService
            .find(sunglassId)
            .pipe(
                tap((sunglass) => this._selectedSunglassSource$.next(sunglass)),
                take(1)
            )
            .subscribe()
    };

    saveSunglass(sunglass: Sunglasses) {
        sunglass.id ? this.updateSunglass(sunglass) : this.createSunglass(sunglass)
    };

    createSunglass(sunglass: Sunglasses) {
        this.sunglassesService
            .create(sunglass)
            .pipe(
                tap(() => {
                    this.loadSunglasses();
                    this.notificationsService.notify('Sunglasses Successfully Created')
                }),
                take(1)
            )
            .subscribe()
    }

    updateSunglass(sunglass: Sunglasses) {
        this.sunglassesService
            .update(sunglass)
            .pipe(
                tap(() => {
                    this.loadSunglasses();
                    this.notificationsService.notify('Sunglasses Successfully Updated')
                }),
                take(1)
            )
            .subscribe();
    };

    deleteSunglass(sunglassId: string) {
        this.sunglassesService
            .delete(sunglassId)
            .pipe(
                tap(() => {
                    this.loadSunglasses();
                    this.notificationsService.notify('Sunglasses Successfully Deleted')
                }),
                take(1)
            )
            .subscribe();
    }
}
