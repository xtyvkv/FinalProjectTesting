import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifCardService {

  constructor(private httpClient: HttpClient) { }

  getRandomGifs() {
    return this.httpClient.get('https://api.giphy.com/v1/gifs/search?api_key=krIIgdHCVeZ4XkrILHcljt661U7hJ9kK&q=reaction&limit=5&offset=0&rating=g&lang=en');
  }

  getChosenGif() {
    return this.httpClient.get('https://api.giphy.com/v1/gifs/search?api_key=krIIgdHCVeZ4XkrILHcljt661U7hJ9kK&q=shock&limit=1&offset=0&rating=g&lang=en');
  }
}
