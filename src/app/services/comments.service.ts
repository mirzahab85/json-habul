import { apiENUM, environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUserDTO } from "../models/user.model";
import { Injectable } from "@angular/core";

@Injectable()

export class CommentsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAllComments(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiUrl + apiENUM.comments)
}

}
