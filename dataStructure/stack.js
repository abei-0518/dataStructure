/*
 * @Author: abei 
 * @Date: 2020-01-04 10:11:26 
 * @Last Modified by:   abei 
 * @Last Modified time: 2020-01-04 10:11:26 
 */
function Stack() {
  this.items = []
  Stack.prototype.push = (data) => {
    this.items.push(data)
  }
  Stack.prototype.pop = () => {
    return this.items.pop()
  }
  Stack.prototype.size = () => {
    return this.items.length
  }
  Stack.prototype.ispty = () => {
    return this.items.length === 0
  }
  Stack.prototype.tostring = () => {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' '
    }
    return str;
  }
  Stack.prototype.sorts = () => {
    return this.items.sort((a, b) => {
      return a - b
    })
  }
  Stack.prototype.toArray = () => {
    let arr = [];
    for (let i = 0; i < this.items.length; i++) {
      arr.push(this.items[i])
    }
    return arr;
  }
  Stack.prototype.clear = () => {
    return this.items = []
  }
}