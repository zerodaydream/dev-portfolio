import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechCard {
  id: string;
  title: string;
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
  value: string;
  isFace: boolean;
  techIcon: string;
  description: string;
  color: 'red' | 'black';
  skills: string[];
}

@Component({
  selector: 'app-folder-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder-showcase.component.html',
  styleUrls: ['./folder-showcase.component.scss']
})
export class FolderShowcaseComponent implements OnInit, OnDestroy {
  title = 'Tools and Technologies';
  isVisible = false;
  
  decks: TechCard[][] = [
    // Frontend Deck - Hearts & Diamonds
    [
      { 
        id: 'frontend-ace', title: 'Frontend', suit: 'hearts', value: 'A', isFace: false, color: 'red',
        techIcon: '🎨', description: 'Modern Frontend Development with cutting-edge frameworks and tools',
        skills: ['Angular', 'React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind CSS']
      },
      { 
        id: 'angular-king', title: 'Angular', suit: 'hearts', value: 'K', isFace: true, color: 'red',
        techIcon: '🅰️', description: 'Powerful TypeScript-based framework for building scalable web applications',
        skills: ['Component Architecture', 'Services', 'RxJS', 'NgRx', 'Angular Material', 'CLI']
      },
      { 
        id: 'react-queen', title: 'React', suit: 'diamonds', value: 'Q', isFace: true, color: 'red',
        techIcon: '⚛️', description: 'Component-based library for building user interfaces',
        skills: ['JSX', 'Hooks', 'Redux', 'Context API', 'Next.js', 'React Router']
      },
      { 
        id: 'vue-jack', title: 'Vue.js', suit: 'hearts', value: 'J', isFace: true, color: 'red',
        techIcon: '💚', description: 'Progressive framework for building user interfaces',
        skills: ['Vue 3', 'Composition API', 'Vuex', 'Vue Router', 'Nuxt.js', 'Vue CLI']
      },
      { 
        id: 'typescript-10', title: 'TypeScript', suit: 'diamonds', value: '10', isFace: false, color: 'red',
        techIcon: '📘', description: 'Typed superset of JavaScript that compiles to plain JavaScript',
        skills: ['Static Typing', 'Interfaces', 'Generics', 'Decorators', 'Advanced Types']
      },
      { 
        id: 'sass-9', title: 'Sass/SCSS', suit: 'hearts', value: '9', isFace: false, color: 'red',
        techIcon: '🎨', description: 'CSS extension language with variables, nesting, and mixins',
        skills: ['Variables', 'Mixins', 'Nesting', 'Functions', 'Partials', 'Inheritance']
      },
      { 
        id: 'tailwind-8', title: 'Tailwind CSS', suit: 'diamonds', value: '8', isFace: false, color: 'red',
        techIcon: '💨', description: 'Utility-first CSS framework for rapid UI development',
        skills: ['Utility Classes', 'Responsive Design', 'Dark Mode', 'Custom Components']
      }
    ],
    // AI/ML Deck - Clubs
    [
      { 
        id: 'aiml-ace', title: 'AI/ML', suit: 'clubs', value: 'A', isFace: false, color: 'black',
        techIcon: '🤖', description: 'Artificial Intelligence and Machine Learning technologies',
        skills: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'MLOps', 'Data Science']
      },
      { 
        id: 'python-king', title: 'Python', suit: 'clubs', value: 'K', isFace: true, color: 'black',
        techIcon: '🐍', description: 'Versatile programming language perfect for AI/ML development',
        skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter', 'FastAPI']
      },
      { 
        id: 'tensorflow-queen', title: 'TensorFlow', suit: 'clubs', value: 'Q', isFace: true, color: 'black',
        techIcon: '🧠', description: 'Open-source machine learning framework by Google',
        skills: ['Keras', 'TensorBoard', 'TF Serving', 'TF Lite', 'Neural Networks', 'Deep Learning']
      },
      { 
        id: 'pytorch-jack', title: 'PyTorch', suit: 'clubs', value: 'J', isFace: true, color: 'black',
        techIcon: '🔥', description: 'Dynamic neural networks and deep learning framework',
        skills: ['Dynamic Graphs', 'Autograd', 'TorchVision', 'Research', 'GPU Computing']
      },
      { 
        id: 'opencv-10', title: 'OpenCV', suit: 'clubs', value: '10', isFace: false, color: 'black',
        techIcon: '👁️', description: 'Computer vision and image processing library',
        skills: ['Image Processing', 'Object Detection', 'Face Recognition', 'Video Analysis']
      },
      { 
        id: 'sklearn-9', title: 'Scikit-learn', suit: 'clubs', value: '9', isFace: false, color: 'black',
        techIcon: '📊', description: 'Machine learning library for classical ML algorithms',
        skills: ['Classification', 'Regression', 'Clustering', 'Model Selection', 'Preprocessing']
      },
      { 
        id: 'pandas-8', title: 'Pandas', suit: 'clubs', value: '8', isFace: false, color: 'black',
        techIcon: '🐼', description: 'Data manipulation and analysis library for Python',
        skills: ['DataFrames', 'Data Cleaning', 'Analysis', 'Visualization', 'Time Series']
      }
    ],
    // Backend Deck - Spades
    [
      { 
        id: 'backend-ace', title: 'Backend', suit: 'spades', value: 'A', isFace: false, color: 'black',
        techIcon: '⚙️', description: 'Server-side development and API architecture',
        skills: ['REST APIs', 'GraphQL', 'Microservices', 'Database Design', 'Security', 'DevOps']
      },
      { 
        id: 'nodejs-king', title: 'Node.js', suit: 'spades', value: 'K', isFace: true, color: 'black',
        techIcon: '🟢', description: 'JavaScript runtime for server-side development',
        skills: ['Express.js', 'NPM', 'Event Loop', 'Streams', 'Clustering', 'Performance']
      },
      { 
        id: 'django-queen', title: 'Django', suit: 'spades', value: 'Q', isFace: true, color: 'black',
        techIcon: '🎸', description: 'High-level Python web framework for rapid development',
        skills: ['ORM', 'Admin Panel', 'Authentication', 'REST Framework', 'Security', 'Testing']
      },
      { 
        id: 'fastapi-jack', title: 'FastAPI', suit: 'spades', value: 'J', isFace: true, color: 'black',
        techIcon: '⚡', description: 'Modern, fast web framework for building APIs with Python',
        skills: ['Async/Await', 'Pydantic', 'OpenAPI', 'Type Hints', 'Performance', 'Documentation']
      },
      { 
        id: 'postgresql-10', title: 'PostgreSQL', suit: 'spades', value: '10', isFace: false, color: 'black',
        techIcon: '🐘', description: 'Advanced open-source relational database system',
        skills: ['ACID Compliance', 'JSON Support', 'Extensions', 'Performance', 'Scaling']
      },
      { 
        id: 'docker-9', title: 'Docker', suit: 'spades', value: '9', isFace: false, color: 'black',
        techIcon: '🐳', description: 'Containerization platform for application deployment',
        skills: ['Containers', 'Images', 'Docker Compose', 'Orchestration', 'DevOps']
      },
      { 
        id: 'aws-8', title: 'AWS', suit: 'spades', value: '8', isFace: false, color: 'black',
        techIcon: '☁️', description: 'Amazon Web Services cloud platform',
        skills: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation', 'API Gateway']
      }
    ]
  ];

  activeDeckIndex: number | null = null;
  spreadDeckIndex: number | null = null;
  pickedCard: TechCard | null = null;
  isAnimating = false;

  ngOnInit() {
    // Make component visible after a brief delay for smooth entrance animation
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  getSuitSymbol(suit: string): string {
    const symbols = {
      'hearts': '♥',
      'diamonds': '♦',
      'clubs': '♣',
      'spades': '♠'
    };
    return symbols[suit as keyof typeof symbols] || '';
  }

  getCardPattern(value: string): number[] {
    // Generate array for poker card suit patterns
    const patterns: { [key: string]: number[] } = {
      'A': [1], // Single large symbol
      'K': [1, 2], // Face card decorative pattern
      'Q': [1, 2], // Face card decorative pattern  
      'J': [1, 2], // Face card decorative pattern
      '10': [1, 2, 3, 4], // Four symbols
      '9': [1, 2, 3], // Three symbols
      '8': [1, 2, 3, 4] // Four symbols in 2x2 grid
    };
    return patterns[value] || [1];
  }

  getDeckTitle(index: number): string {
    return this.decks[index][0].title;
  }

  async moveDeckToCenter(index: number) {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    
    // Reset any previous states
    this.spreadDeckIndex = null;
    this.pickedCard = null;
    
    // Move deck to center and hide others
    this.activeDeckIndex = index;
    
    // Wait for the centering animation to complete, then auto-spread
    setTimeout(() => {
      this.spreadDeckIndex = index;
      // Allow interactions after spread completes
      setTimeout(() => {
        this.isAnimating = false;
      }, 800); // Time for spread animation
    }, 500); // Time for centering animation
  }

  async pickCard(card: TechCard, event: Event) {
    event.stopPropagation();
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.pickedCard = card;
    
    // Allow time for smooth card animation and container appearance
    setTimeout(() => {
      this.isAnimating = false;
    }, 1200);
  }

  closeCardView() {
    this.pickedCard = null;
    // Restore the spread when closing
    setTimeout(() => {
      this.spreadDeckIndex = this.activeDeckIndex;
    }, 300);
  }

  resetToInitial() {
    this.activeDeckIndex = null;
    this.spreadDeckIndex = null;
    this.pickedCard = null;
    this.isAnimating = false;
  }

  putBackCard() {
    // Put back the picked card and return to spread view
    this.pickedCard = null;
    if (this.activeDeckIndex !== null) {
      this.spreadDeckIndex = this.activeDeckIndex;
    }
  }

  clearPickedCard() {
    // Clear the picked card but keep the spread open
    this.pickedCard = null;
  }

  putBackDeck() {
    // Put back the entire deck to initial position
    this.activeDeckIndex = null;
    this.spreadDeckIndex = null;
    this.pickedCard = null;
    this.isAnimating = false;
  }

  getCardTransform(deckIndex: number, cardIndex: number, deckLength: number): string {
    if (this.spreadDeckIndex === deckIndex) {
      // Sector spread from bottom center
      const totalCards = deckLength;
      const spreadAngle = 100; // Total spread angle
      
      // Calculate angle for this card (spread from -50° to +50°)
      const angleStep = spreadAngle / (totalCards - 1);
      const cardAngle = -spreadAngle / 2 + (cardIndex * angleStep);
      
      // Center the spread horizontally by translating cards based on their position
      const centerOffset = (cardIndex - (totalCards - 1) / 2) * 45; // Horizontal spacing
      const upwardOffset = Math.abs(cardAngle) * 0.3; // Cards at edges lift slightly more
      
      return `translate(calc(-50% + ${centerOffset}px), calc(-100% - ${upwardOffset}px)) rotate(${cardAngle}deg)`;
    } else {
      // Stacked deck appearance
      const offset = cardIndex * 2;
      return `translate(calc(-50% + ${offset}px), calc(-100% + ${-offset}px))`;
    }
  }
}
