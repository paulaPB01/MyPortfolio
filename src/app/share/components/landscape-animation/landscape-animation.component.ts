import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-landscape-animation',
  templateUrl: './landscape-animation.component.html',
  styleUrls: ['./landscape-animation.component.scss']
})
export class LandscapeAnimationComponent implements OnInit, OnDestroy {
  readonly terminalText = `Hi, I'm Paula

> Ingeniera Biomédica con formación en Inteligencia Artificial y experiencia en software hospitalario.
> Busco crear soluciones de IA orientadas a la salud digital y sistemas de apoyo clínico`;

  displayedText = '';
  private typingTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.typeCharacter(0);
  }

  private typeCharacter(index: number): void {
    this.displayedText = this.terminalText.slice(0, index);

    if (index >= this.terminalText.length) {
      return;
    }

    const nextCharacter = this.terminalText[index];
    const delay = nextCharacter === '\n' ? 170 : 24;
    this.typingTimer = setTimeout(() => this.typeCharacter(index + 1), delay);
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }
}
