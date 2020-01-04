/*
 * @Author: abei 
 * @Date: 2020-01-04 10:11:29 
 * @Last Modified by:   abei 
 * @Last Modified time: 2020-01-04 10:11:29 
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
    // this.prev = null;
  }
  insert(key) {
    let node = new Node(key);
    // 判断是不是第一次添加
    if (!this.root) {
      this.root = node
    } else {
      this._insert(this.root, node)
    }
  }
  _insert(node, newNode) {
    // 判断父节点是否小于根节点  小于就放左边  大于||等于就放右边
    if (node.key > newNode.key) {
      // 判断左边有没有节点
      if (!node.left) {
        // 没有就赋值
        node.left = newNode
      } else {
        // 有的话在调用判断方法继续判断
        this._insert(node.left, newNode)
      }
    } else {
      // 判断右边有没有节点
      if (!node.right) {
        // 没有就赋值
        node.right = newNode
      } else {
        // 有的话在调用判断方法继续判断
        this._insert(node.right, newNode)
      }
    }
  }

  // 最大值
  max() {
    let currNode = this.root
    while (currNode.right) {
      currNode = currNode.right
    }
    return currNode.key
  }

  // 最小值
  min() {
    let currNode = this.root
    while (currNode.left) {
      currNode = currNode.left
    }
    return currNode.key
  }

  // 查找  
  // 两个方法  建议用循环方法  因为递归方法调用方法自身次数过多会溢出、报错
  search(key) {
    // 循环判断
    let currNode = this.root
    while (currNode) {
      // 判断根节点和key  如果大于在右边找 如果小于在左边找  等于就直接返回找到了
      if (currNode.key > key) {
        if (currNode.left) {
          currNode = currNode.left
        } else {
          return false
        }
      } else if (currNode.key < key) {
        if (currNode.right) {
          currNode = currNode.right
        } else {
          return false
        }
      } else {
        return currNode.key === key
      }
    }

    // 递归判断
    // return this._search(currNode, key)
  }
  // _search(currNode, key) {
  // 判断是否为空，为空直接返回false
  //   if (!currNode) {
  //     return false;
  //   }
  // 判断是不是小于  小于的话调用自身方法从左边找
  //   if (currNode.key > key) {
  //     return this._search(currNode.left, key)
  //   } else if (currNode.key < key) {
  // 判断是不是大于  大于的话调用自身方法从右边找
  //     return this._search(currNode.right, key)
  //   } else {
  // 如果相等返回true
  //     return currNode.key === key
  //   }
  // }

  // 中序遍历
  middleSort() {
    let arr = []
    let currNode = this.root
    return this._middleSort(currNode, arr)
  }
  _middleSort(currNode, arr) {
    if (currNode) {
      this._middleSort(currNode.left, arr)
      arr.push(currNode.key)
      this._middleSort(currNode.right, arr)
    }
    return arr;
  }


  // 清空
  clear() {
    this.root = null
    return [];
  }
}