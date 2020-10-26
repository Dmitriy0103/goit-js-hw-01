'use strict'


class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
  }
  
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });
  
  const refs = {
    day: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
  };
  
  function pad(val) {
    return String(val).padStart(2, '0');
  }
  
  function updateTimer(time) {

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
    refs.day.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }
  
  function timerA() {
    const dateTarget = timer.targetDate.getTime();
  
    setInterval(() => {
      const dateCurrent = Date.now();
      updateTimer(dateTarget - dateCurrent);
    }, 1000);
  }
  
  timerA();