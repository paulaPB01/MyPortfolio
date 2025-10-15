import { Directive, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input('appScrollAnimation') animationClass: string = 'on-scroll'; 
  @ViewChild('scrollContent') scrollContent!: ElementRef;

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit() {
    const root = this.findScrollParentWithId(this.el.nativeElement, 'scrollContent');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add(this.animationClass);
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        root,
        threshold: 0.1 
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private findScrollParentWithId(element: HTMLElement, id: string): HTMLElement | null {
    let parent = element.parentElement;
    while (parent) {
      if (parent.id === id) return parent;
      parent = parent.parentElement;
    }
    return null;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
