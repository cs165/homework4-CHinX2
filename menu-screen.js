// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(containerElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.containerElement = containerElement;
    this._onSubmit = this._onSubmit.bind(this);
    this._onJsonGetList = this._onJsonGetList.bind(this);
    
    fetch('https://fullstackccu.github.io/homeworks/hw4/songs.json')
    .then(response => response.json())
    .then(this._onJsonGetList);

  }
  // TODO(you): Add methods as necessary.
  show() {
    this.containerElement.classList.remove('inactive');
    const form = document.querySelector('form');
    form.addEventListener('submit',this._onSubmit);

    var themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
    var idx = Math.floor(Math.random() * Math.floor(10));
    document.querySelector('#query-input').value = themes[idx];
  }

  hide() {
    document.getElementById('error').classList.add('inactive');
    this.containerElement.classList.add('inactive');
  }

  _onSubmit(event) {
    event.preventDefault();
    const songInput = document.querySelector('#song-selector');
    //const title = encodeURIComponent(songInput.value);
    const title = songInput.value;


    const themeInput = document.querySelector('#query-input');
    const theme = encodeURIComponent(themeInput.value);

    const eventInfo = {
      songValue: title,
      gifValue: theme,
    };
    console.log(eventInfo);
    document.dispatchEvent(new CustomEvent('go-click', { detail: eventInfo}));

  }

  _onJsonGetList(json) {
    for( const song in json) {
      //console.log(song);
      var op = document.createElement('option');
      op.value = json[song]['songUrl'];
      op.innerHTML = json[song]['title'];
      document.querySelector('#song-selector').appendChild(op);
    }
  }
}
