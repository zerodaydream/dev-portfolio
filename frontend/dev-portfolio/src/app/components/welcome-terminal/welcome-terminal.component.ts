import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome-terminal.component.html',
  styleUrls: ['./welcome-terminal.component.scss']
})
export class WelcomeTerminalComponent implements AfterViewInit {
  userInput = '';
  outputLines: string[] = [];
  titles = ['ML Engineer', 'Python Developer'];
  characters = '!@#$%^&*()_+-=[]{}|;:,.<>?/abcdefghijklmnopqrstuvwxyz0123456789';
  @ViewChild('portfolioContainer', { static: true }) portfolioContainerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('terminalScroll') terminalScrollRef!: ElementRef<HTMLDivElement>;
  @ViewChild('titleDisplay', { static: true }) titleDisplayRef!: ElementRef<HTMLHeadingElement>;

  constructor(private renderer: Renderer2) {}

  delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  ngAfterViewInit(): void {
    this.scrollToBottom();
    this.renderer.listen(this.portfolioContainerRef.nativeElement, 'mousemove', this.onMouseMove.bind(this));
    this.animateTitles(); // Start title animation loop
  }

  async animateTitles() {
    while (true) {
      for (const title of this.titles) {
        await this.morphTitle(title);
        await this.delay(3000); // keep title for some time
      }
    }
  }

  async morphTitle(finalText: string) {
    const el = this.titleDisplayRef.nativeElement;
    const length = finalText.length;

    // Step 1: Start with random characters
    let text = Array(length).fill('').map(() => this.randomChar()).join('');
    el.innerText = text;

    // Step 3: Re-randomize before switching to next title
    for (let i = 0; i < length; i++) {
      text = text.substring(0, i) + this.randomChar() + text.substring(i + 1);
      el.innerText = text;
      await this.delay(100);
    }

    for (let i = 0; i < length; i++) {
      text = text.substring(0, i) + finalText[i] + text.substring(i + 1);
      el.innerText = text;
      await this.delay(100);
    }
  }

  randomChar(): string {
    const index = Math.floor(Math.random() * this.characters.length);
    return this.characters[index];
  }

  // ... [Rest of your existing methods remain unchanged] ...
  // handleCommand(), streamOutput(), getClosestCommand(), etc.

  onMouseMove(event: MouseEvent): void {
    const el = this.portfolioContainerRef.nativeElement;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const angle = Math.round((x / rect.width) * 360);
    el.style.setProperty('--gradient-angle', `${angle}deg`);
  }

  handleCommand(): void {
    const input = this.userInput.trim().toLowerCase();
    this.userInput = '';
    if (!input) return;

    if (input === 'clear') {
      this.outputLines = [];
      this.scrollToBottom();
      return;
    }

    this.outputLines.push(`dev-portfolio$alex ~ % ${input}`);
    this.scrollToBottom();

    const matched = this.commands.find(cmd => cmd.name === input);

    if (matched) {
      this.streamOutput(`→ Executing '${matched.name}': ${matched.description}`);
    } else {
      const suggestion = this.getClosestCommand(input);
      this.streamOutput(
        `⚠️ Command not found: "${input}"\n${suggestion ? `Did you mean '${suggestion}'?` : ''}`
      );
    }
  }

  async streamOutput(text: string): Promise<void> {
    let currentLine = '';
    const lastIndex = this.outputLines.length - 1;

    for (const char of text) {
      currentLine += char;
      this.outputLines[lastIndex] = currentLine;
      this.scrollToBottom();
      await this.delay(20);
    }

    this.outputLines.push('');
    this.scrollToBottom();
  }

  getClosestCommand(input: string): string | null {
    let minDist = Infinity;
    let closest: string | null = null;

    for (const cmd of this.commands) {
      const dist = this.levenshteinDistance(input, cmd.name);
      if (dist < minDist && dist <= 2) {
        minDist = dist;
        closest = cmd.name;
      }
    }

    return closest;
  }

  levenshteinDistance(a: string, b: string): number {
    const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));

    for (let i = 0; i <= a.length; i++) dp[i][0] = i;
    for (let j = 0; j <= b.length; j++) dp[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
        else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }

    return dp[a.length][b.length];
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      event.preventDefault();
      this.handleTabCompletion();
    }
  }

  handleTabCompletion(): void {
    const input = this.userInput.trim().toLowerCase();
    if (!input) return;

    const matches = this.commands
      .map(cmd => cmd.name)
      .filter(name => name.startsWith(input));

    if (matches.length === 1) {
      this.userInput = matches[0];
    } else if (matches.length > 1) {
      this.outputLines.push(`dev-portfolio$alex ~ % ${input}`);
      this.outputLines.push(`→ Possible commands: ${matches.join(', ')}`);
      this.scrollToBottom();
    }
  }

  scrollToBottom(): void {
    if (this.terminalScrollRef) {
      setTimeout(() => {
        this.terminalScrollRef.nativeElement.scrollTop = this.terminalScrollRef.nativeElement.scrollHeight;
      }, 0);
    }
  }

  onCommandClick(command: string): void {
    this.userInput = command;
    this.handleCommand();
  }

  onContactClick(): void {
    console.log('Contact email clicked');
  }

  onResumeDownload(): void {
    console.log('Resume download clicked');
  }

  onProjectsView(): void {
    console.log('Projects view clicked');
  }

  commands = [
    { name: 'about', description: 'Learn more about me' },
    { name: 'projects', description: 'View my projects' },
    { name: 'tools', description: 'See my tech stack' },
    { name: 'skills', description: 'Check my skills' },
    { name: 'awards', description: 'View my achievements' },
    { name: 'contact', description: 'Get in touch' },
    { name: 'clear', description: 'Clear the terminal' },
    { name: 'resume', description: 'Download my resume' },
    { name: 'exp', description: 'View my experience' },
    { name: 'help', description: 'List all commands' }
  ];
}