import {
  Directive,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';

@Directive({
  selector: '[scroll-trigger]',
  standalone: true,
})
export class ScrollTriggerDirective implements OnInit, OnDestroy {
  @Output() scrolledIntoView = new EventEmitter<void>();

  private scrollSub!: Subscription;

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.scrollSub = fromEvent(window, 'scroll')
        .pipe(
          startWith(0), // triggers on page load
          debounceTime(100),
          map(() => this.isElementInView()),
          distinctUntilChanged()
        )
        .subscribe((isVisible) => {
          if (isVisible) {
            console.log('✅ Element entered viewport');
            this.zone.run(() => this.scrolledIntoView.emit());
          }
        });
    });
  }

  private isElementInView(): boolean {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
  }
}