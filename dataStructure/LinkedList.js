/*
 * @Author: abei 
 * @Date: 2020-01-04 10:11:20 
 * @Last Modified by:   abei 
 * @Last Modified time: 2020-01-04 10:11:20 
 */
class Nodes {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // 添加
  append(data) {
    // 先把内容传到node这个类里面赋值  最后拿到的结果是一个对象{data:data,next:null}
    let node = new Nodes(data);
    // 判断head是否是第一次添加  如果是的话直接赋值  
    if (!this.head) {
      this.head = node;
      this.tail = node
    } else {
      // 如果不是  要改变指向next
      this.tail.next = node
      this.tail = node
    }
    // 每加一次让length  +1
    this.length += 1;
    return this;
  }
  // 按位置删除
  remove(position) {
    let current = this.head
    let index = 0;
    let prev = null;
    // 如果位置不存在
    let message = '该数据不存在'
    if (position < 0 || position > this.length - 1) {
      return message;
    }
    // 如果删除的是第一个
    if (position === 0) {
      // 如果是第一个的话就让head的指向等于head的下一个指向
      this.head = this.head.next
    } else {
      // 如果不是第一个  把上一个的指向指向要删除的那一项的下一个 也就是跳过被删除的这一项
      while (index++ < position) {
        // 保存上一个到prev
        prev = current
        // 保存被删除项
        current = current.next
      }
      // 被删除的上一个元素的指向=被删除项的指向
      prev.next = current.next
      // 如果删除的是最后一项
      if (position === this.length - 1) {
        this.tail = prev
      }
    }
    this.length -= 1;
    return current.data;
  }
  // 修改
  updata(position, newdata) {
    let message = '该数据不存在'
    if (position < 0 || position > this.length - 1) {
      return message;
    }
    let current = this.head;
    let index = 0;
    // 找到当前要修改的元素
    while (index++ < position) {
      current = current.next
    }
    // 修改内容
    current.data = newdata
    return this;
  }
  // 查
  get(position) {
    let message = '该数据不存在'
    if (position < 0 || position > this.length - 1) {
      return message;
    }
    let current = this.head;
    let index = 0;
    // 找到当前的元素
    while (index++ < position) {
      current = current.next
    }
    return current.data;
  }
  // 插入
  insert(position, data) {
    let node = new Nodes(data)
    let index = 0;
    let prev = null;
    let current = this.head;
    // 判断是否是添加到第一个
    if (position === 0) {
      // 新元素的指向=原本第一个元素
      node.next = this.head
      this.head = node
    } else {
      while (index++ < position) {
        // 保存上一个元素
        prev = current
        // 保存当前元素
        current = current.next
      }
      // 上一个元素的指向=新添加的元素
      prev.next = node
      // 新添加的元素的指向=当前元素
      node.next = current
    }
    // 如果插入的位置是最后的一个
    if (position === this.length) {
      this.tail = node
    }
    this.length += 1;
    return this;
  }
  // 转数组
  toArray() {
    let arr = [];
    let current = this.head
    while (current) {
      arr.push(current.data)
      current = current.next
    }
    return arr;
  }
  // 转字符串
  toString() {
    let str = '';
    let current = this.head
    while (current) {
      str += current.data + ' '
      current = current.next
    }
    return str;
  }
  // 长度
  size() {
    return this.length
  }
  // 判断是否为空
  ispty() {
    return this.length === 0
  }
  // 清空
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }
  // 排序
  sorts() {
    let arr = this.toArray()
    return arr.sort((a, b) => {
      return a - b
    })
  }
}