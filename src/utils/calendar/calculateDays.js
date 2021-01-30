const setClasses = (arr, activeMonth, activeYear) => arr.map(date => date.map(d => {
        let res = []
        const now = new Date()
        if (
            `${d.getDate()}${d.getMonth()}${d.getFullYear()}` ===
            `${now.getDate()}${now.getMonth()}${now.getFullYear()}`) {
            res.push('activeMain')
        }
        if (d > now) res.push('active')
        if (d < now) res.push('passive')
        if (
            d.getMonth() === activeMonth &&
            d.getFullYear() === activeYear &&
            d > now
        ){
            res.push('activeMonth')
        }
        return {date: d, classes: res}
    })
)

const getWeeksArr = (arr) => {
    let res = []
    let week = []
    for (let day of arr) {
        week.push(day)
        if (week.length === 7) {
            res.push(week)
            week = []
        }
    }
    return res
}

const getMonthArr = (date) => {
    let res = []
    const currentMonth = date.getMonth()
    let day = 1

    while (currentMonth === date.getMonth()) {
        res.push(new Date(date.setDate(day)))
        date = new Date(date.setDate(++day))
    }

    return res
}

const getCalendarArr = (date) => {
    let res = []
    const selectedMonthArr = getMonthArr(date)
    const activeMonth = date.getMonth()
    const activeYear = date.getFullYear()
    const prevMonthArr = getMonthArr(new Date(date.setMonth(date.getMonth() - 1)))
    const nextMonthArr = getMonthArr(new Date(date.setMonth(date.getMonth() + 2)))

    res.push(...selectedMonthArr)

    const firstDay = res[0].getDay()

    for (let i = firstDay - 1; i >= 0; i--) {
        res.unshift(prevMonthArr.pop())
    }

    const lastDay = res[res.length - 1].getDay()
    for (let i = lastDay + 1; i <= 6; i++) {
        res.push(nextMonthArr.shift())
    }

    if (res.length < 42) {
        for (let i = 0; i <= 6; i++) {
            res.push(nextMonthArr.shift())
        }
    }

    res = res.map(d => new Date(d.setDate(d.getDate() + 1)))
    res = getWeeksArr(res)
    res = setClasses(res, activeMonth, activeYear)

    return res
}

export default getCalendarArr
