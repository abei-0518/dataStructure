/*
 * @Author: abei 
 * @Date: 2020-01-04 10:11:23 
 * @Last Modified by:   abei 
 * @Last Modified time: 2020-01-04 10:11:23 
 */
function Queue() {
  this.items = []
  Queue.prototype.push = (data) => {
    this.items.push(data)
  }
  Queue.prototype.shift = () => {
    return this.items.shift()
  }
  Queue.prototype.size = () => {
    return this.items.length
  }
  Queue.prototype.ispty = () => {
    return this.items.length === 0
  }
  Queue.prototype.tostring = () => {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' '
    }
    return str;
  }
  Queue.prototype.toArray = () => {
    let arr = [];
    for (let i = 0; i < this.items.length; i++) {
      arr.push(this.items[i])
    }
    return arr;
  }
  Queue.prototype.sorts = () => {
    return this.items.sort((a, b) => {
      return a - b
    })
  }
  Queue.prototype.clear = () => {
    return this.items = []
  }
}