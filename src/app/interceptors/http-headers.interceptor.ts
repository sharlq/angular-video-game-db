import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(
        req:HttpRequest<any>,
        next:HttpHandler
    ): Observable<HttpEvent<any>> {
        req=req.clone({
            setHeaders:{
                'X-RapidAPI-Key':'4d8f3cc5bfmshc54b0bbaaf215a8p115944jsnd05ff4c0271d',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'

            },
            setParams:{
                key:'001299dc2d7b4a1e9a74e4ff6711f33e'
            }
        })
        return next.handle(req);
    }
}