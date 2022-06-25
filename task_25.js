function powersOfTwo(n) {
    let result = []
    for (let i = 0; i <= n; i++) {
        result[i] = 2**i
        return result
    }
}

console.log(powersOfTwo(4))
