export class ThuanMethods {
  static addZero(s: any): String {
    return s < 10 ? "0" + s : "" + s;
  }
  static getTimeZone(s: any): String {
    // format: GMT +-X
    s = s / 60;
    return s < 0 ? `GMT +${-s}` : `GMT -${s}`;
  }
  static HHMMSSGMT(date: Date): String {
    let hours = this.addZero(date.getHours());
    let minutes = this.addZero(date.getMinutes());
    let seconds = this.addZero(date.getSeconds());
    let timeZone = this.getTimeZone(date.getTimezoneOffset());
    return `${hours}:${minutes}:${seconds}   ${timeZone}`;
  }
}
