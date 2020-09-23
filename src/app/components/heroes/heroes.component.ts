import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): any {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(id: number): any {
    this.router.navigate(['/heroe', id]);
  }
}
