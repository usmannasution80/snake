function Highscores(){
  const {_} = window.web;
  const locale = window.web.locale || 'id';
  const opt    = {dateStyle : 'full'};
  return (
    <ol>
      {
        window.web.getHighscores().map(
          score => (
            <li>
              <div>
                {_('date', {date:new Date(score.date).toLocaleDateString(locale, opt)})}
              </div>
              <div>
                {_('score', {score:score.score})}
              </div>
            </li>
          )
        )
      }
    </ol>
  );
};

export default Highscores;
