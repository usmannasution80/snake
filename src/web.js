import locales from 'locales/locales';

export default {
  _(key, values){

    let lang = window.web.strg('lang');
    if(!lang)
      lang = 'id';

    let dict;
    if(!(dict = locales[lang]))
      dict = locales['id'];

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
  set(key, value, rerender = true){
    window.web[key] = value;
    if(rerender)
      window.web.render();
  },
  strg(key, value, rerender = true){
    if(value === undefined)
      return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
    if(rerender)
      window.dispatchEvent(new Event('storage'));
  },
  dstrg(key, rerender = true){
    window.localStorage.removeItem(key);
    if(rerender)
      window.dispatchEvent(new Event('storage'));
  },
  getHighscores(){
    let highscores = window.web.strg('highscores');
    if(highscores)
      return JSON.parse(highscores);
    return [];
  }
};