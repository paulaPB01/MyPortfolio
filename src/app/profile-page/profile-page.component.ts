import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { sectionsPageConstants } from '../share/constants/sectionsPage.constants';
import { TranslateService } from '@ngx-translate/core';
import { myTranslateService } from '../share/services/myTranslate.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})

export class ProfilePageComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollContent') scrollContent: any;
  sectionsPage = sectionsPageConstants;
  private scrollObserver:  IntersectionObserver | null = null;
  activeSection: string = '';
  barMenuItems: any[] = [];
  items = [
    {label: 'MY_LANDSCAPE', section: this.sectionsPage.LANDSCAPE, command: () => {}, visible: false},
    {label: 'MY_ABOUT_ME', icon: 'person', section: this.sectionsPage.ABOUT_ME, command: () => this.scrollTo(this.sectionsPage.ABOUT_ME), visible: true},
    {label: 'MY_SKILLS', icon: 'psychology', section: this.sectionsPage.SKILLS, command: () => this.scrollTo(this.sectionsPage.SKILLS), visible: true},
    {label: 'MY_EXPERIENCE', icon: 'business_center', section: this.sectionsPage.EXPERIENCE, command: () => this.scrollTo(this.sectionsPage.EXPERIENCE), visible: true},
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
      const sectionElement = document.getElementById(section);
      const scrollContainer = this.scrollContent?.nativeElement;

      if (!sectionElement || !scrollContainer) return;

      const newScrollTop = sectionElement.getBoundingClientRect().top  + scrollContainer.scrollTop - 50;
      scrollContainer.scrollTo({
        top: newScrollTop,
        behavior: 'smooth' // Usa el scroll nativo suave
      });
  }

  private selectScrolledSection() {
    const headerHeight = 50;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${headerHeight}px 0px 0px 0px`,
      threshold: [0.3] // activa cuando al menos 50% visible
    };

    this.scrollObserver = new IntersectionObserver((entries) => {
      // elegimos la entrada con mayor ratio intersectada
      const intersectingEntries  = entries
        .filter(e => e.isIntersecting)

      const visible = intersectingEntries
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (visible) {
        const id = visible.target.getAttribute('id') || '';

        this.setActive(id);
      }
    }, options);

    document.querySelectorAll<HTMLElement>('.my-section').forEach(s => {
      this.scrollObserver!.observe(s);
    });

    document.querySelectorAll<HTMLElement>('.my-landscape').forEach(l => {
      this.scrollObserver!.observe(l);
    });
  }

  private setActive(id: string) {
    if (!id || this.activeSection === id) {
      return;
    }

    this.activeSection = id;
    this.barMenuItems = this.barMenuItems.map(i => ({
      ...i,
      active: i.section === id ? true : false
    }));
    this.cd.markForCheck();
  }
}
