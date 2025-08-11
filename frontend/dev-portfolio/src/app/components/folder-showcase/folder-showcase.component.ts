import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class FolderShowcaseComponent implements OnInit, OnChanges {
  @Input() isVisible = false;
  
  title = 'Tools and Technologies';
  showCardGrid = false;
  selectedDeckIndex: number | null = null;
  selectedCard: TechCard | null = null;
  cardRows: TechCard[][] = [];
  
  // Animation states
  sectionVisible = false;
  titleVisible = false;
  decksVisible = false;

  decks: TechCard[][] = [
    // Frontend Deck - Hearts & Diamonds (Red Cards)
    [
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
      },
      { 
        id: 'javascript-7', title: 'JavaScript', suit: 'hearts', value: '7', isFace: false, color: 'red',
        techIcon: '🟨', description: 'Dynamic programming language that powers the web',
        skills: ['ES6+', 'Async/Await', 'DOM Manipulation', 'Event Handling', 'Closures', 'Prototypes']
      },
      { 
        id: 'html-6', title: 'HTML5', suit: 'diamonds', value: '6', isFace: false, color: 'red',
        techIcon: '🌐', description: 'Standard markup language for creating web pages',
        skills: ['Semantic HTML', 'Forms', 'Canvas', 'Web Storage', 'Accessibility', 'SEO']
      },
      { 
        id: 'css-5', title: 'CSS3', suit: 'hearts', value: '5', isFace: false, color: 'red',
        techIcon: '🎨', description: 'Style sheet language for describing web page presentation',
        skills: ['Flexbox', 'Grid', 'Animations', 'Responsive Design', 'CSS Variables', 'Transforms']
      },
      { 
        id: 'webpack-4', title: 'Webpack', suit: 'diamonds', value: '4', isFace: false, color: 'red',
        techIcon: '📦', description: 'Module bundler for modern JavaScript applications',
        skills: ['Bundle Optimization', 'Code Splitting', 'Loaders', 'Plugins', 'Hot Reload', 'Tree Shaking']
      },
      { 
        id: 'vite-3', title: 'Vite', suit: 'hearts', value: '3', isFace: false, color: 'red',
        techIcon: '⚡', description: 'Next generation frontend tooling for faster development',
        skills: ['Fast HMR', 'Native ES Modules', 'TypeScript', 'Plugin System', 'Build Optimization']
      },
      { 
        id: 'figma-2', title: 'Figma', suit: 'diamonds', value: '2', isFace: false, color: 'red',
        techIcon: '🎨', description: 'Collaborative interface design tool',
        skills: ['UI Design', 'Prototyping', 'Design Systems', 'Collaboration', 'Auto Layout', 'Components']
      },
      { 
        id: 'frontend-ace', title: 'Frontend Mastery', suit: 'hearts', value: 'A', isFace: false, color: 'red',
        techIcon: '👑', description: 'Complete mastery of modern frontend development',
        skills: ['Architecture', 'Performance', 'UX/UI', 'Testing', 'Deployment', 'Best Practices']
      }
    ],
    // AI/ML Deck - Clubs & Spades (Black Cards)
    [
      { 
        id: 'tensorflow-king', title: 'TensorFlow', suit: 'clubs', value: 'K', isFace: true, color: 'black',
        techIcon: '🧠', description: 'Open-source machine learning framework by Google',
        skills: ['Keras', 'TensorBoard', 'TF Serving', 'TF Lite', 'Neural Networks', 'Deep Learning']
      },
      { 
        id: 'pytorch-queen', title: 'PyTorch', suit: 'spades', value: 'Q', isFace: true, color: 'black',
        techIcon: '🔥', description: 'Dynamic neural networks and deep learning framework',
        skills: ['Dynamic Graphs', 'Autograd', 'TorchVision', 'Research', 'GPU Computing']
      },
      { 
        id: 'python-jack', title: 'Python', suit: 'clubs', value: 'J', isFace: true, color: 'black',
        techIcon: '🐍', description: 'Versatile programming language perfect for AI/ML development',
        skills: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter', 'FastAPI']
      },
      { 
        id: 'opencv-10', title: 'OpenCV', suit: 'spades', value: '10', isFace: false, color: 'black',
        techIcon: '👁️', description: 'Computer vision and image processing library',
        skills: ['Image Processing', 'Object Detection', 'Face Recognition', 'Video Analysis']
      },
      { 
        id: 'sklearn-9', title: 'Scikit-learn', suit: 'clubs', value: '9', isFace: false, color: 'black',
        techIcon: '📊', description: 'Machine learning library for classical ML algorithms',
        skills: ['Classification', 'Regression', 'Clustering', 'Model Selection', 'Preprocessing']
      },
      { 
        id: 'pandas-8', title: 'Pandas', suit: 'spades', value: '8', isFace: false, color: 'black',
        techIcon: '🐼', description: 'Data manipulation and analysis library for Python',
        skills: ['DataFrames', 'Data Cleaning', 'Analysis', 'Visualization', 'Time Series']
      },
      { 
        id: 'numpy-7', title: 'NumPy', suit: 'clubs', value: '7', isFace: false, color: 'black',
        techIcon: '🔢', description: 'Fundamental package for scientific computing with Python',
        skills: ['Arrays', 'Mathematical Functions', 'Linear Algebra', 'Broadcasting', 'Performance']
      },
      { 
        id: 'jupyter-6', title: 'Jupyter', suit: 'spades', value: '6', isFace: false, color: 'black',
        techIcon: '📓', description: 'Interactive computing environment for data science',
        skills: ['Notebooks', 'Data Visualization', 'Prototyping', 'Documentation', 'Collaboration']
      },
      { 
        id: 'matplotlib-5', title: 'Matplotlib', suit: 'clubs', value: '5', isFace: false, color: 'black',
        techIcon: '📈', description: 'Comprehensive library for creating static and interactive visualizations',
        skills: ['Plotting', 'Charts', 'Customization', 'Export Formats', 'Animation']
      },
      { 
        id: 'keras-4', title: 'Keras', suit: 'spades', value: '4', isFace: false, color: 'black',
        techIcon: '🔗', description: 'High-level neural networks API for deep learning',
        skills: ['Model Building', 'Layer API', 'Callbacks', 'Metrics', 'Preprocessing']
      },
      { 
        id: 'huggingface-3', title: 'Hugging Face', suit: 'clubs', value: '3', isFace: false, color: 'black',
        techIcon: '🤗', description: 'Platform for machine learning models and datasets',
        skills: ['Transformers', 'NLP Models', 'Model Hub', 'Datasets', 'Tokenizers']
      },
      { 
        id: 'cuda-2', title: 'CUDA', suit: 'spades', value: '2', isFace: false, color: 'black',
        techIcon: '🚀', description: 'Parallel computing platform for GPU acceleration',
        skills: ['GPU Programming', 'Parallel Processing', 'Memory Management', 'Performance Optimization']
      },
      { 
        id: 'aiml-ace', title: 'AI/ML Mastery', suit: 'clubs', value: 'A', isFace: false, color: 'black',
        techIcon: '🤖', description: 'Complete mastery of Artificial Intelligence and Machine Learning',
        skills: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'MLOps', 'Data Science']
      }
    ],
    // Backend Deck - Mixed Suits (Red & Black)
    [
      { 
        id: 'nodejs-king', title: 'Node.js', suit: 'spades', value: 'K', isFace: true, color: 'black',
        techIcon: '🟢', description: 'JavaScript runtime for server-side development',
        skills: ['Express.js', 'NPM', 'Event Loop', 'Streams', 'Clustering', 'Performance']
      },
      { 
        id: 'django-queen', title: 'Django', suit: 'hearts', value: 'Q', isFace: true, color: 'red',
        techIcon: '🎸', description: 'High-level Python web framework for rapid development',
        skills: ['ORM', 'Admin Panel', 'Authentication', 'REST Framework', 'Security', 'Testing']
      },
      { 
        id: 'fastapi-jack', title: 'FastAPI', suit: 'clubs', value: 'J', isFace: true, color: 'black',
        techIcon: '⚡', description: 'Modern, fast web framework for building APIs with Python',
        skills: ['Async/Await', 'Pydantic', 'OpenAPI', 'Type Hints', 'Performance', 'Documentation']
      },
      { 
        id: 'postgresql-10', title: 'PostgreSQL', suit: 'diamonds', value: '10', isFace: false, color: 'red',
        techIcon: '🐘', description: 'Advanced open-source relational database system',
        skills: ['ACID Compliance', 'JSON Support', 'Extensions', 'Performance', 'Scaling']
      },
      { 
        id: 'docker-9', title: 'Docker', suit: 'spades', value: '9', isFace: false, color: 'black',
        techIcon: '🐳', description: 'Containerization platform for application deployment',
        skills: ['Containers', 'Images', 'Docker Compose', 'Orchestration', 'DevOps']
      },
      { 
        id: 'mongodb-8', title: 'MongoDB', suit: 'hearts', value: '8', isFace: false, color: 'red',
        techIcon: '🍃', description: 'NoSQL document database for modern applications',
        skills: ['Document Storage', 'Indexing', 'Aggregation', 'Replication', 'Sharding']
      },
      { 
        id: 'redis-7', title: 'Redis', suit: 'clubs', value: '7', isFace: false, color: 'black',
        techIcon: '🔴', description: 'In-memory data structure store for caching and messaging',
        skills: ['Caching', 'Pub/Sub', 'Data Types', 'Persistence', 'Clustering']
      },
      { 
        id: 'kubernetes-6', title: 'Kubernetes', suit: 'diamonds', value: '6', isFace: false, color: 'red',
        techIcon: '☸️', description: 'Container orchestration platform for automated deployment',
        skills: ['Pod Management', 'Services', 'Deployments', 'Scaling', 'Load Balancing']
      },
      { 
        id: 'nginx-5', title: 'Nginx', suit: 'spades', value: '5', isFace: false, color: 'black',
        techIcon: '🌐', description: 'High-performance web server and reverse proxy',
        skills: ['Load Balancing', 'SSL/TLS', 'Caching', 'Security', 'Performance']
      },
      { 
        id: 'graphql-4', title: 'GraphQL', suit: 'hearts', value: '4', isFace: false, color: 'red',
        techIcon: '🔗', description: 'Query language and runtime for APIs',
        skills: ['Schema Design', 'Resolvers', 'Subscriptions', 'Caching', 'Federation']
      },
      { 
        id: 'rabbitmq-3', title: 'RabbitMQ', suit: 'clubs', value: '3', isFace: false, color: 'black',
        techIcon: '🐰', description: 'Message broker for reliable communication between services',
        skills: ['Message Queuing', 'Routing', 'Clustering', 'Reliability', 'Performance']
      },
      { 
        id: 'elasticsearch-2', title: 'Elasticsearch', suit: 'diamonds', value: '2', isFace: false, color: 'red',
        techIcon: '🔍', description: 'Distributed search and analytics engine',
        skills: ['Full-text Search', 'Analytics', 'Indexing', 'Scaling', 'Real-time']
      },
      { 
        id: 'backend-ace', title: 'Backend Mastery', suit: 'spades', value: 'A', isFace: false, color: 'black',
        techIcon: '⚙️', description: 'Complete mastery of server-side development and architecture',
        skills: ['REST APIs', 'GraphQL', 'Microservices', 'Database Design', 'Security', 'DevOps']
      }
    ]
  ];

  ngOnInit() {
    // Initial setup, animations will be triggered by ngOnChanges
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible'] && changes['isVisible'].currentValue) {
      this.triggerAnimations();
    }
  }
  
  private triggerAnimations() {
    // Trigger section visibility first
    setTimeout(() => {
      this.sectionVisible = true;
    }, 100);
    
    // Then title with a slight delay
    setTimeout(() => {
      this.titleVisible = true;
    }, 400);
    
    // Then decks with staggered animation
    setTimeout(() => {
      this.decksVisible = true;
    }, 800);
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
    const patterns: { [key: string]: number[] } = {
      'A': [1],
      'K': [1, 2],
      'Q': [1, 2],
      'J': [1, 2],
      '10': [1, 2, 3, 4],
      '9': [1, 2, 3],
      '8': [1, 2, 3, 4]
    };
    return patterns[value] || [1];
  }

  getDeckTitle(index: number): string {
    const titles = ['Frontend', 'AI/ML', 'Backend'];
    return titles[index] || 'Unknown';
  }

  // Get the first card for display (header card)
  getDeckHeaderCard(index: number): TechCard {
    const headerCards: TechCard[] = [
      { 
        id: 'frontend-header', title: 'Frontend', suit: 'hearts', value: '', isFace: false, color: 'red',
        techIcon: '🎨', description: 'Frontend Development Technologies',
        skills: []
      },
      { 
        id: 'aiml-header', title: 'AI/ML', suit: 'clubs', value: '', isFace: false, color: 'black',
        techIcon: '🤖', description: 'Artificial Intelligence & Machine Learning',
        skills: []
      },
      { 
        id: 'backend-header', title: 'Backend', suit: 'spades', value: '', isFace: false, color: 'black',
        techIcon: '⚙️', description: 'Backend Development Technologies',
        skills: []
      }
    ];
    return headerCards[index];
  }

  // Get actual cards (excluding header)
  getDeckCards(index: number): TechCard[] {
    return this.decks[index];
  }

  selectDeck(deckIndex: number) {
    this.selectedDeckIndex = deckIndex;
    this.showCardGrid = true;
    this.selectedCard = null;
    
    // Get actual deck cards (excluding header)
    const cards = this.getDeckCards(deckIndex);
    this.cardRows = [];
    
    // Organize cards into rows of 5
    for (let i = 0; i < cards.length; i += 5) {
      this.cardRows.push(cards.slice(i, i + 5));
    }
  }

  selectCard(card: TechCard) {
    this.selectedCard = card;
  }

  closeModal() {
    this.selectedCard = null;
  }

  goBackToDecks() {
    this.showCardGrid = false;
    this.selectedDeckIndex = null;
    this.selectedCard = null;
    this.cardRows = [];
  }
}