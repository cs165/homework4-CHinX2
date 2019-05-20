// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.playButton = document.getElementById('play');
    this.playButton.style.backgroundImage = 'url("images/pause.png")';
    
  }
  // TODO(you): Add methods as necessary.
  play() {
    this.playButton.style.backgroundImage = 'url("images/pause.png")';
  }
  pause() {
    this.playButton.style.backgroundImage = 'url("images/play.png")';
  }
}
