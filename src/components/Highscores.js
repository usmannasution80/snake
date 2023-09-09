function Highscores(){
  const locale = window.web.locale || 'id';
  const opt    = {dateStyle : 'full'};
  return (
    <>
      {
        window.web.getHighscores().map(
          score => (
            <div>
              {new Date(score.date).toLocaleDateString(locale, opt)}
              &nbsp;-&nbsp;
              {score.score}
            </div>
          )
        )
      }
    </>
  );
};

export default Highscores;
