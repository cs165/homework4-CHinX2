// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(containerElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.containerElement = containerElement;
    this.audioPlayer = new AudioPlayer();

    this._onPause = this._onPause.bind(this);

  }
  // TODO(you): Add methods as necessary.
  // Giphy api : 81V8J58dciFEHfyhxGnYEfhAL0n1b0iV
  show(song, gif) {
    this.containerElement.classList.remove('inactive');

    this.playButton = document.getElementById('play');
    this.playButton.addEventListener('click',this._onPause);
    this.audioPlayer.setSong(song);
    this.audioPlayer.play();
    this.pause = false;
  }

  hide() {
    this.playButton.removeEventListener('click',this._onPause);
    this.containerElement.classList.add('inactive');
  }

  _onPause() {
    if(this.pause) {
      this.playButton.style.backgroundImage = 'url("images/pause.png")';
      this.pause = false;
      this.audioPlayer.play();
    }
    else {
      this.playButton.style.backgroundImage = 'url("images/play.png")';
      this.audioPlayer.pause();
      this.pause = true;
    }
  }
}
