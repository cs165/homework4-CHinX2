// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    // Giphy api : 81V8J58dciFEHfyhxGnYEfhAL0n1b0iV
    this.apiKey = '81V8J58dciFEHfyhxGnYEfhAL0n1b0iV';
    this.giflist = null;
    this.len = 2;
    this.pick = 0;
    this.front = true;
    this._onJsonGetList = this._onJsonGetList.bind(this);

  }
  // TODO(you): Add methods as necessary.

  getGif(gif) {
    if(gif === '') {
      var themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
      var idx = Math.floor(Math.random() * Math.floor(10));
      gif = themes[idx];
    }
    console.log('theme:'+gif);
    document.getElementById('gif-screen1').classList.remove('inactive');
    document.getElementById('gif-screen2').classList.add('inactive');

    var url = "https://api.giphy.com/v1/gifs/search?q="+gif+"&api_key="+this.apiKey+"&limit=25&rating=g";
    fetch(url)
    .then(response => response.json())
    .then(this._onJsonGetList);

    
  }

  _onJsonGetList(json) {
    this.giflist = json
    this.len = json.data.length;
    console.log(this.giflist);
    var idx = Math.floor(Math.random() * Math.floor(this.len-1));
    this.pick = idx + 1;

    const gifUrl = this.giflist.data[idx].images.downsized.url;
    document.getElementById('gif-screen1').style.backgroundImage = 'url("'+gifUrl+'")';
    const preUrl = this.giflist.data[idx+1].images.downsized.url;
    document.getElementById('gif-screen2').style.backgroundImage = 'url("'+gifUrl+'")';
  }

  nextGif() {
    if(this.front) {
      document.getElementById('gif-screen1').classList.add('inactive');
      document.getElementById('gif-screen2').classList.remove('inactive');

      var idx = Math.floor(Math.random() * Math.floor(this.len));
      while(idx == this.pick) Math.floor(Math.random() * Math.floor(this.len));
      this.pick = idx;
      const gifUrl = this.giflist.data[idx].images.downsized.url;
      document.getElementById('gif-screen1').style.backgroundImage = 'url("'+gifUrl+'")';
      this.front = false;
    }
    else {
      document.getElementById('gif-screen2').classList.add('inactive');
      document.getElementById('gif-screen1').classList.remove('inactive');

      var idx = Math.floor(Math.random() * Math.floor(this.len));
      while(idx == this.pick) Math.floor(Math.random() * Math.floor(this.len));
      this.pick = idx;
      const gifUrl = this.giflist.data[idx].images.downsized.url;
      document.getElementById('gif-screen2').style.backgroundImage = 'url("'+gifUrl+'")';
      this.front = true;
    }
  }
}
