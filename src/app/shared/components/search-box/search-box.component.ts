import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      //cuando se deja de enviar valores por un segundo, entonces se hace el subscribe
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
  }

  ngOnDestroy(): void {
    //se desuscribe para que la aplicacion no este escuchando aun cuando se cambie de componente
    this.debouncerSuscription?.unsubscribe();
  }

  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSuscription?: Subscription;

  public buscar: string = '';



  @Output()
  onDebounce = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';


  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm)
  }


}
