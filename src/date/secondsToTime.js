/*
 * @Author: jerrychir 
 * @Date: 2018-08-16 16:16:21 
 * @Last Modified by: jerrychir
 * @Last Modified time: 2018-08-16 16:32:31
 */
export default (seconds, showSecond = true) => {
    const hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    const second = seconds - (hours * 3600) - (minutes * 60);
    let time = '';
  
    if (hours !== 0) {
      time = `${hours}:`;
    }
    if (minutes !== 0 || time !== '') {
      minutes = (minutes < 10 && time !== '') ? `0${minutes}` : String(minutes);
      time += `${minutes}:`;
    } else {
      time += minutes = '0:';
    }
    if (showSecond) {
      if (time === '') {
        time = `${second}`;
      } else {
        time += (second < 10) ? `0${second}` : `${second}`;
      }
    }
    return time;
  }