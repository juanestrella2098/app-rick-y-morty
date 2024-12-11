import { Component } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { Character } from '../../interfaces/CharacterResponse.interface';

@Component({
  selector: 'ram-by-name',
  templateUrl: './by-name.component.html',
  styleUrl: './by-name.component.css'
})
export class ByNameComponent {

  public isLoading: boolean = false;
  public characters: Character[] = [];

  constructor(private riackAndMortyService: RickandmortyService) {

  }

  searchByName(term: string) {

    this.isLoading = true;

    this.riackAndMortyService.searchCharacterByName(term).subscribe((characters) => {
      this.isLoading = false;
      this.characters = characters.results;
    })
  }

}
