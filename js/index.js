document.addEventListener("DOMContentLoaded", () => {

  document.getElementById('convert-btn').addEventListener('click', convertTime);
  
  function convertTime() {
    const input = document.getElementById('time-input').value;
    const op = document.getElementById('operator').value;
    const val = document.getElementById('value').value;
    const [h, m, s, ms] = input.split(':');
    const d = moment
      .duration(parseInt(h), 'hours')
      .add(parseInt(m), 'minutes')
      .add(parseInt(s), 'seconds')
      .add(parseInt(ms));
    const totalMs = d.asMilliseconds();
    const calcedD = moment.duration(calc(totalMs, val, op));
    const ans = `${calcedD.days()}
      DAYS ${calcedD.hours()}
      HOURS ${calcedD.minutes()}
      MIN ${calcedD.seconds()}
      SEC ${Math.round(calcedD.milliseconds())}
      MS`
    document.getElementById('ans').innerHTML = ans;
  }

  function calc(a, b, op) {
    if (op === '*') {
      return a*b;
    }
    if (op === '/') {
      return a/b;
    }
    return null;
  }

});
