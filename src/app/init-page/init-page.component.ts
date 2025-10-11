import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { sectionsPageConstants } from '../constants/sectionsPage.constants';
import { TranslateService } from '@ngx-translate/core';
import { myTranslateService } from '../services/myTranslate.service';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.scss']
})

export class InitPageComponent implements OnInit, AfterViewInit {
  sectionsPage = sectionsPageConstants;
  private scrollObserver:  IntersectionObserver | null = null;
  activeSection: string = '';
  barMenuItems: any[] = [];
  items = [
    {label: 'MY_ABOUT_ME', icon: 'pi pi-fw pi-user', section: this.sectionsPage.ABOUT_ME, command: () => this.scrollTo(this.sectionsPage.ABOUT_ME)},
    {label: 'MY_SKILLS', icon: 'pi pi-fw pi-user', section: this.sectionsPage.SKILLS, command: () => this.scrollTo(this.sectionsPage.SKILLS)},
    {label: 'MY_PROJECTS', icon: 'pi pi-fw pi-file', section: this.sectionsPage.PROYECTS, command: () => this.scrollTo(this.sectionsPage.PROYECTS)},
    {label: 'MY_EXPERIENCE', icon: 'pi pi-fw pi-briefcase', section: this.sectionsPage.EXPERIENCE, command: () => this.scrollTo(this.sectionsPage.EXPERIENCE)},
    {label: 'MY_CONTACT', icon: 'pi pi-fw pi-envelope', section: this.sectionsPage.CONTACT, command: () => this.scrollTo(this.sectionsPage.CONTACT)},
  ];

  constructor(
    private cd: ChangeDetectorRef,
    private myTranslate: myTranslateService,
  ) { }

  ngOnInit(): void {
     this.myTranslate.translateObject(this.items, 'es').then(res => {
       this.barMenuItems = res;
     });
  }

  ngAfterViewInit() {
      this.selectScrolledSection();
  }

  scrollTo(section: string) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  private selectScrolledSection() {
    const headerHeight = 50;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${headerHeight}px 0px 0px 0px`,
      threshold: [0.5] // activa cuando al menos 50% visible
    };

    this.scrollObserver = new IntersectionObserver((entries) => {
      // elegimos la entrada con mayor ratio intersectada
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        const id = visible.target.getAttribute('id') || '';
        this.setActive(id);
      }
    }, options);

    document.querySelectorAll<HTMLElement>('.my-section').forEach(s => {
      this.scrollObserver!.observe(s);
    });
  }

  private setActive(id: string) {
    if (!id || this.activeSection === id) {
      return;
    }

    this.activeSection = id;
    this.barMenuItems = this.barMenuItems.map(i => ({
      ...i,
      styleClass: i.section === id ? 'active' : ''
    }));
    this.cd.markForCheck();
  }
}
