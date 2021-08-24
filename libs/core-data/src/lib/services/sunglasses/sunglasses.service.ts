import { Inject, Injectable } from '@angular/core';
import { Sunglasses } from "@sunglasses/api-interfaces";
import { HttpClient } from "@angular/common/http";
import { mapTo } from "rxjs/operators";
import { SunglassesEnvironment, SUNGLASSES_ENVIRONMENT } from "@sunglasses/environment";


@Injectable({
  providedIn: 'root'
})
export class SunglassesService {
  model = 'sunglasses'

  constructor(
    private httpClient: HttpClient,
    @Inject(SUNGLASSES_ENVIRONMENT) private environment: SunglassesEnvironment 
  ) {}

  all() {
    return this.httpClient.get<Sunglasses[]>(this.getUrl())
  };

  find(sunglassId: string) {
    return this.httpClient.get<Sunglasses>(this.getUrlById(sunglassId))
  };

  create(sunglasses: Sunglasses) {
    return this.httpClient.post<Sunglasses>(this.getUrl(), sunglasses)
  };

  update(sunglasses: Sunglasses) {
    return this.httpClient.patch<Sunglasses>(this.getUrlById(sunglasses.id), sunglasses)
  };

  delete(sunglassId: string) {
    return this.httpClient.delete<Sunglasses>(this.getUrlById(sunglassId))
  };

  getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
