import { Component } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { Character } from '../../interfaces/CharacterResponse.interface';

@Component({
  selector: 'ram-by-status',
  templateUrl: './by-status.component.html',
  styleUrl: './by-status.component.css'
})
export class ByStatusComponent {
  public isLoading: boolean = false;
  public characters: Character[] = [];


  constructor(private riackAndMortyService: RickandmortyService) {

  }

  searchByStatus(term: string) {

    this.isLoading = true;

    this.riackAndMortyService.searchCharacterByStatus(term).subscribe((characters) => {
      this.isLoading = false;
      this.characters = characters.results;
      console.log(characters);
    })
  }

}
