const arr = [2, 1, 7, 5, 4, 6]

class InsertionSort {
  static sort (arr) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
      // for (let j = i; j >= 0; j--) {
      //   if (arr[j] < arr[j - 1]) {
      //     InsertionSort.swap(arr, j, j - 1)
      //   } else {
      //     break
      //   }
      // }
      for (let j = i; j >= 0 && arr[j] < arr[j - 1]; j--) {
        InsertionSort.swap(arr, j, j - 1)
      }
    }
    return arr
  }
  static sort2 (arr) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]
      for (let j = i - 1; j >= 0; j--) {
        if (arr[i] < arr[j]) {
          arr[i] = arr[j]
        } else {
          arr[j + 1] = item
          break
        }
      }
    }
    return arr
  }
  static sort3 (arr) {
    for (let i = arr.length - 1; i >=0; i--) {
      const item = arr[i]
      let j = i
      for (j; j + 1 < arr.length && arr[j] > arr[j + 1]; j++) {
        arr[j] = arr[j + 1]
      }
      arr[j] = item
    }
    return arr
  }
  static swap (arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
console.log(InsertionSort.sort(arr))
console.log(InsertionSort.sort2(arr))
console.log(InsertionSort.sort3(arr))