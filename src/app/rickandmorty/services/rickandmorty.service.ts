import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, CharactersResponse } from '../interfaces/CharacterResponse.interface';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  private apiUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacterRequest(url: string): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(url)
      .pipe(
        catchError(() => of())
      );
  }

  //Buscamos los personajes por nombre
  searchCharacterByName(name: string): Observable<CharactersResponse> {

    const url = `${this.apiUrl}/?name=${name}`;

    return this.getCharacterRequest(url);
  }

  //Buscamos los personajes por su estado(alive, dead or unknown)
  searchCharacterByStatus(status: string): Observable<CharactersResponse> {

    const url = `${this.apiUrl}/?status=${status}`;

    return this.getCharacterRequest(url);
  }

}
