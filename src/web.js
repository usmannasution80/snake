import id from './locales/id';

export default {
  _(key, values){
    let dict = id;
    if(dict[key])
      return dict[key];
    return '';
  },
  navigationOnClick(e, direction){
    return;
  }
};