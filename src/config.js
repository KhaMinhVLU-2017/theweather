
const config = {
  apiKey: '7ae9a5fa741a5f1b5f26cf97690754a6',
  convertKtoC: (a) => {
    return parseInt(a - 273.15)
  },
  convertDatetoDay: (a) => {
    let d = new Date(a)
    let n = d.getDay()
    switch (n) {
      case 0:
        return ['Sunday','bg1']
      case 1:
        return ['Monday','bg2']
      case 2:
        return ['Tuesday','bg3']
      case 3:
        return ['Wenesday','bg4']
      case 4:
        return ['Thurday','bg5']
      case 5:
        return ['Friday','bg6']
      case 6:
        return ['Satuday','bg7']
      default:
        return ['I Love You','bg1']
    }
  }
}

export default config