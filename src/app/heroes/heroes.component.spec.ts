// import { of } from "rxjs";
// import { Hero } from "../hero";
// import { HeroesComponent } from "./heroes.component"

// describe('HeroesComponent', () =>{
//     let component: HeroesComponent;
//     let HEROES: Hero[];
//     let mockHeroService;

//     beforeEach(() => {
//         HEROES = [
//             {id:1, name: 'supertatchi', strength:22},
//             {id:2, name: 'waterMakus', strength: 18},
//             {id:3, name: 'incredibleTom', strength:55}
//         ]
//         mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
//         component = new HeroesComponent(mockHeroService); //service
//     })
//     describe('delete', () => {
//         it('should remove the selected hero from the list', () =>{
//             //arrange
//             mockHeroService.deleteHero.and.returnValue(of(true));
//             component.heroes = HEROES;
//             //act
//             component.delete(HEROES[0]);
//             //assert
//             expect(mockHeroService.deleteHero).toHaveBeenCalledOnceWith(HEROES[0]); // check for the corretct parameter
//         })
//     })
// })

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('Heroes Component', () =>{
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])
    let HEROES;

    beforeEach(()=>{
        HEROES = [
            {id:1, name: 'supertatchi', strength:22},
            {id:2, name: 'waterMakus', strength: 18},
            {id:3, name: 'incredibleTom', strength:55}
        ]
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            providers: [{
                provide: HeroService, useValue: mockHeroService,
            }],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    })
    it('should correctly set hero the value from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3);
    })

})