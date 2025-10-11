import { AfterViewInit, Component, ElementRef, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dynamic-bar',
  templateUrl: './dynamic-bar.component.html',
  styleUrls: ['./dynamic-bar.component.scss']
})
export class DynamicBarComponent implements AfterViewInit, OnDestroy {
  @Input() item: any;
  counter = 20;
  animatedLevel = 0;

  constructor(
    private el: ElementRef
  ) {}
  private observer?: IntersectionObserver;
  private hasAnimated = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter();
          observer.disconnect();
          this.hasAnimated = true;
        }
      });
    },  { threshold: 0.5 });

    observer.observe(this.el.nativeElement.parentElement);
    this.observer = observer;
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private animateCounter() {
    const duration = 800; // ms
    const steps = 50;
    const increment = this.item.level / steps;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      this.counter += Math.round(increment);
      if (this.counter >= this.item.level) {
        this.counter = this.item.level;
        clearInterval(interval);
      }
    }, intervalTime);
  }
}
