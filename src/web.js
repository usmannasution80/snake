import id from './locales/id';

export default {
  _(key, values){
    let dict = id;
    if(dict[key])
      return dict[key];
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
  }
};