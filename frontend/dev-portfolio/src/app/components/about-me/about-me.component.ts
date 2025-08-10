import {
  CommonModule
} from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';

export interface SkillCard {
  icon: string;
  title: string;
  description: string;
  iconBackground?: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutMeComponent implements AfterViewInit {
  @Output() scrollTrigger = new EventEmitter<void>();
  @ViewChild('aboutContainer') aboutContainerRef!: ElementRef;

  isVisible = false;

  skillCards: SkillCard[] = [
    {
      icon: '</>',
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and performant user interfaces with modern frameworks and cutting-edge tools.',
      iconBackground: '#FFE8E0'
    },
    {
      icon: '🚀',
      title: 'Backend Development',
      description: 'Designing scalable APIs and robust database architectures that power complex applications.',
      iconBackground: '#FFE8E0'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating intuitive user experiences with a keen focus on usability, accessibility, and visual appeal.',
      iconBackground: '#FFE8E0'
    },
    {
      icon: '👥',
      title: 'Team Leadership',
      description: 'Leading cross-functional teams using agile methodologies and fostering collaborative environments.',
      iconBackground: '#FFE8E0'
    }
  ];

  ngAfterViewInit(): void {
    if (this.aboutContainerRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.isVisible = true;
              this.scrollTrigger.emit();
              observer.disconnect(); // Only emit once
            }
          });
        },
        {
          root: null,
          threshold: 0.2 // adjust based on how much visibility you want
        }
      );

      observer.observe(this.aboutContainerRef.nativeElement);
    }
  }

  addSkillCard(card: SkillCard): void {
    this.skillCards.push(card);
  }

  removeSkillCard(index: number): void {
    if (index >= 0 && index < this.skillCards.length) {
      this.skillCards.splice(index, 1);
    }
  }

  trackByIndex(index: number, item: SkillCard): number {
    return index;
  }
}