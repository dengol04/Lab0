const f = x => x ** 2 - Math.cos(x)

function left_riemann_sum(f, n) {
    let a = Number(prompt("Введите a"))
    let b = Number(prompt("Введите b"))

    const delta_x = (b - a) / n

    let res_sum = 0
    for (let i = 0; i < n; ++i) {
        let f_value = f(a + i*delta_x)
        res_sum += f_value * delta_x
    }

    return res_sum
}

console.log(left_riemann_sum(f, 100000000))