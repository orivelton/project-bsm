import { Component } from '@angular/core';

@Component({
  selector: 'bsm-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.css']
})
export class WorldsComponent{

  constructor() { }

  worlds = [
    { title: "BSM no mundo" },
    {titleCountry: {Brasil: {}}}
  ]


/*bsmWorlds = [{
	"continents": [{
      "nameContinent":"Américas",
      "pais": [
          { "name":"Brasil", "cidade":[ "São Paulo"] },
          { "name":"Bolívia", "cidade":[ "La Paz" ] },
          { "name":"ESTADOS UNIDOS", "cidade":[ "Califórnia", "Flórida", "Nevada", "Washington, DC" ] },
          { "name":"México", "cidade":[ "Cidade do México" ] }        
      ]},
      
      {
      "nameContinent":"Europa",
      "pais": [
          { "name":"INGLATERRA", "cidade":[ "Londres"] },
          { "name":"PORTUGAL", "cidade":[ "Lisboa" ] }       
      ]},
      
      {"nameContinent":"Ásia",
      "pais": [
          { "name":"CHINA", "cidade":[ "Beijing"] },
          { "name":"CÓREIA DO SUL", "cidade":[ "Seul" ] },
          { "name":"Líbano", "cidade":[ "Beirute" ] } ,
          { "name":"EMIRADOS ÁRABES UNIDOS", "cidade":[ "Dubai" ] } 
      ]}
	]
 }];*/




}
