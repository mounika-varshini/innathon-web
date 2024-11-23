import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment";
import { BaseService } from "../common/services/base.service";



@Injectable({ providedIn: 'root', })
export class MappingEquipmentsWorkService extends BaseService {
    constructor(protected http: HttpClient) {
        super(http);
    }

    url = environment.apiUrl + '/users';

    getUsers() {
        return this.get(this.url);
    }
}