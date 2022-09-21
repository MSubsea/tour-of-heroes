import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroComponent } from "./hero.component"

describe('Hero Component', () =>{
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    })

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = {id:1, name: 'incredibleTom', strength:55}
        // fixture.detectChanges();
        expect(fixture.componentInstance.hero.name).toEqual('incredibleTom');
    })

    it('should render the hero name in the anchor tag', () => {
        fixture.componentInstance.hero = {id:1, name: 'incredibleTom', strength:55}
        fixture.detectChanges(); // binding will not get updated until this runs (hero.id, hero.name)
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('incredibleTom');

    })

})