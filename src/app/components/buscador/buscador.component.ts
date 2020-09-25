import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [],
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['h'];
      console.log(params['h']); // para coger el termino por la url, osea h, el heroe a buscar
      this.heroes = this.heroesService.buscarHeroes(params['h']);
      console.log(this.heroes);
    });
  }

  verHeroe(id: number): any {
    this.router.navigate(['/heroe', id]);
  }
}
