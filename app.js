// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);

    const musicElement = document.querySelector('#music');
    this.music = new MusicScreen(musicElement);

    this.gotoMusic = this.gotoMusic.bind(this);
    this.skipMusic = this.skipMusic.bind(this);
    this.loadGif = this.loadGif.bind(this);

    this.song = '';

    document.addEventListener('go-click', this.gotoMusic);
    document.addEventListener('skip-music', this.skipMusic);
    document.addEventListener('load-finish', this.loadGif);

    this.menu.show();
  }
  // TODO(you): Add methods as necessary.

  gotoMusic(event) {
    this.menu.hide();
    this.song = event.detail.songValue;
    this.music.load(event.detail.gifValue);
    document.getElementById('loading').classList.remove('inactive');
    //this.music.show(event.detail.songValue);
  }

  skipMusic(event) {
    this.music.hide();
    document.getElementById('error').classList.remove('inactive');
    this.menu.show();
  }

  loadGif(event) {
    document.getElementById('loading').classList.add('inactive');
    this.music.show(this.song);
  }


}
