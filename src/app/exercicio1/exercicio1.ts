import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio1',
  imports: [FormsModule],
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.css',
})
export class Exercicio1 {
  musicas: string[] = ['Justin Bieber', 'Taylor Swift', 'Ed Sheeran', 'Adele', 'Beyoncé'];

  musicaSelecionada = '';
  novaMusica = '';
  musicaTocando = false;
  curtidas = 0;
  like = false;
  estadoMusica = 'Pausada';

  selecionarMusica(musica: string) {
    this.musicaSelecionada = musica;
    this.musicaTocando = true;
    this.estadoMusica = 'Tocando';
  }

  pausarMusica() {
    this.musicaTocando = false;
    this.estadoMusica = 'Pausada';
  }

  pararMusica() {
    this.musicaTocando = false;
    this.estadoMusica = 'Parada';
  }

  alternarMusica() {
    this.musicaTocando = !this.musicaTocando;
    this.estadoMusica = this.musicaTocando ? 'Tocando' : 'Pausada';
  }

  curtir() {
    this.like = true;
    this.curtidas = this.curtidas + 1;
  }

  adicionarMusica() {
    if (this.novaMusica.trim()) {
      this.musicas.push(this.novaMusica.trim());
      this.novaMusica = '';
    }
  }
}

