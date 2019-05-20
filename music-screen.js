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
    this.playButton = new PlayButton();
    this.gifDisplay = new GifDisplay();


    this._onPause = this._onPause.bind(this);
    this._onKick = this._onKick.bind(this);

  }
  // TODO(you): Add methods as necessary.
  // Giphy api : 81V8J58dciFEHfyhxGnYEfhAL0n1b0iV
  show(song) {
    document.getElementById('play').addEventListener('click',this._onPause);

    this.audioPlayer.setSong(song);
    this.audioPlayer.setKickCallback(this._onKick);
    this.audioPlayer.play();
    this.pause = false;
    this.containerElement.classList.remove('inactive');
  }

  load(gif) {
    this.gifDisplay.getGif(gif);
  }

  hide() {
    this.audioPlayer.pause();
    this.pause = true;
    document.getElementById('play').removeEventListener('click',this._onPause);
    this.containerElement.classList.add('inactive');
  }

  _onPause() {
    if(this.pause) {
      this.playButton.play();
      this.audioPlayer.play();
      this.pause = false;
    }
    else {
      this.playButton.pause();
      this.audioPlayer.pause();
      this.pause = true;
    }
  }

  _onKick() {
    console.log('kick!');
    this.gifDisplay.nextGif();
  }
}
