document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('convert-btn').addEventListener('click', convertTime);
  document.getElementById('op-select').addEventListener('change', updatePlaceholder);

  function convertTime() {
    const input = document.getElementById('time-input').value;
    const op = document.getElementById('op-select').value;
    const val = document.getElementById('val-input').value;
    const totalMs = toMs(input);
    const calcedD = moment.duration(calc(totalMs, val, op));
    const ans = calcedD.days() +
      ' DAYS ' + calcedD.hours() +
      ' HOURS ' + calcedD.minutes() +
      ' MIN ' + calcedD.seconds() +
      ' SEC ' + Math.round(calcedD.milliseconds()) +
      'MS';
    document.getElementById('ans').innerHTML = ans;
  }

  function calc(a, b, op) {
    if (op === 'mult') {
      return a*parseFloat(b);
    }
    if (op === 'div') {
      return a/parseFloat(b);
    }
    if (op === 'add') {
      return a+toMs(b);
    }
    if (op === 'sub') {
      return a-toMs(b);
    }
    return 0;
  }

  function updatePlaceholder(event) {
    const { value } = event.target;
    const valInput = document.getElementById('val-input');
    if (value === 'mult' || value === 'div') {
      valInput.placeholder = "2.5";
    } else {
      valInput.placeholder = "hh:mm:ss:ms";
    }
  }

  function toMs(input) {
    const [h, m, s, ms] = input.split(':');
    const d = moment
      .duration(parseInt(h), 'hours')
      .add(parseInt(m), 'minutes')
      .add(parseInt(s), 'seconds')
      .add(parseInt(ms));
    return d.asMilliseconds();
  }

});
