import id from './locales/id';

export default {
  _(key, values){
    let dict = id;
    if(dict[key]){
      let val = dict[key];
      if(values){
        for(let k in values)
          val = val.replace(':' + k, values[k]);
      }
      return val;
    }
    return '';
  },
  snakeColor : 'yellow',
  navigationOnClick : e => e,
  selectOnClick : e => e,
  mainMenuOnClick : e => {
    window.web.navigate('/');
  },
  navigate : path => path,
  render : () => undefined,
  strg(key, value){
    if(value === undefined)
      return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
    window.dispatchEvent(new Event('storage'));
  },
  dstrg(key){
    window.localStorage.removeItem(key);
    window.dispatchEvent(new Event('storage'));
  },
  getHighscores:function(){
    let highscores = window.web.strg('highscores');
    if(highscores)
      return JSON.parse(highscores);
    return [];
  }
};