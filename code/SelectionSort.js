const arr = [2, 1, 7, 5, 4, 6]

class SelectionSort {
  static sort (arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] > arr[j]) {
          const temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
        }
      }
    }
    return arr
  }
  static sortEnd (arr) {
    const len = arr.length
    for (let i = len - 1; i > 0; i--) {
      let maxIndex = i
      for (let j = 0; j < i - 1; j++) {
        if (arr[i] - arr[j] < 0) {
          maxIndex = j
        }
        SelectionSort.swap(arr, i, maxIndex) 
      }
    }
    return arr
  }
  static swap (arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
console.log(SelectionSort.sort(arr))
console.log(SelectionSort.sortEnd(arr))