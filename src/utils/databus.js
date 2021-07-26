let instance

class Databus {
  constructor() {
    if (!instance) {
      instance = this
      this.lazyLoad = {
        default: ''
      }
      this.permission = {
        list: ['1', '2', '3', '4']
      }
    }
    return instance
  }
}

export default Databus
