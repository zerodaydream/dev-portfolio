import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatrag',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatrag.component.html',
  styleUrl: './chatrag.component.scss'
})
export class ChatragComponent implements OnInit {
  userMessage = '';
  showExampleResponse = true;
  isTyping = false;
  isVisible = false;
  
  quickPrompts = [
    "What's your age?",
    "Show me your resume", 
    "Know more about me",
    "Show me your certificates"
  ];

  exampleResponse = `I'm Alex, a passionate Full Stack Developer with over 5 years of experience in creating beautiful and functional web applications. I specialize in React, TypeScript, and Node.js, with a strong background in both frontend and backend development. I love solving complex problems and turning ideas into reality through code.`;

  ngOnInit() {
    // Trigger entrance animation after a short delay
    setTimeout(() => {
      this.isVisible = true;
    }, 300);
  }

  onMessageInput() {
    // Hide example response when user starts typing
    if (this.userMessage.trim().length > 0) {
      this.showExampleResponse = false;
    } else {
      // Show example response when text area is empty
      this.showExampleResponse = true;
    }
  }

  onFocus() {
    // Keep the current behavior - don't hide on focus, only on actual typing
  }

  onBlur() {
    // If the text area is empty when user leaves it, show example response again
    if (this.userMessage.trim().length === 0) {
      this.showExampleResponse = true;
    }
  }

  onQuickPromptClick(prompt: string) {
    this.userMessage = prompt;
    this.showExampleResponse = false;
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      // Here you would implement the actual chat functionality
      console.log('Sending message:', this.userMessage);
      // For now, just clear the message
      this.userMessage = '';
      this.showExampleResponse = true;
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}