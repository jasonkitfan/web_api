class Coffee {
  constructor(private roast?: string, private ounces = 8, private shots = 0) {
    if (roast === undefined) {
      throw Error('No roast defined');
    }
  }

  getSize = () => {
    if (this.ounces <= 0) {
      return "Undefined";
    } else if (this.ounces <= 8) {
      return 'Small';
    } else if (this.ounces <= 12) {
      return 'Medium';
    } else
      return 'Large';
  }

  order = () => {
    let msg;
    msg = `You've ordered a${this.shots > 0 ? ` ${this.shots} shots` : ""} ${this.shots >= 2 ? "'Strong' " : ""}${this.getSize()} ${this.roast} coffee.`;
    return msg;
  }
}

export default Coffee;
