import { HttpClient } from "@angular/common/http";
import { Observable, ObservableInput } from 'rxjs';

export class CoreService<T> {

    protected http: HttpClient;
    protected url: string;
    constructor(http: HttpClient, url: string) {
        this.http = http;
        this.url = url;
    }


    //obtém uma lista de elementos
    public getLista(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }

    //obtém um item pelo id
    public getItem(id: string): Observable<T> {
        const url_id = `${this.url}/${id}`;
        return this.http.get<T>(url_id);
    }

    //inclui um elemento
    public postItem(item: T): Observable<T> {
        return this.http.post<T>(this.url, item);
    }

    //alteração de um elemento
    public putItem(item: T, id: string): Observable<T> {
        const url_id = `${this.url}/${id}`;
        return this.http.put<T>(url_id, item);
    }

}
