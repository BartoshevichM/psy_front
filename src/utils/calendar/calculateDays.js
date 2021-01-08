const getUpRow = (currentDay, currentMonth, currentYear) => {
    let arr = []
    let weekDay = 7
    let full = false
    let month
    while (weekDay > 0) {
        if (currentDay === 1) {
            month = currentMonth - 1 >= 0 ? currentMonth - 1 : 11
            currentYear = month !== 11 ? currentYear : currentYear - 1
            currentDay = getMaxDays(month, currentYear) + 1
            full = true
        }
        arr[--weekDay] = new Date(currentYear, full ? month : currentMonth, Math.abs(--currentDay))
    }
    return {currentDay, arr, full}
}

const getDownRow = (currentDay, maxDays, currentMonth, currentYear) => {
    let arr = []
    let weekDay = -1
    let month
    let next = false
    while (weekDay < 6) {
        if (currentDay === maxDays ) {
            currentDay = 0
            month = currentMonth + 1 === 12 ? 0 : currentMonth + 1
            next = true
        }
            const day = new Date(currentYear, next ? month : currentMonth, ++currentDay)
            currentDay = day.getDate()
            arr[++weekDay] = day
    }
    return {currentDay, arr}
}

const getMaxDays = (currentMonth, currentYear) => {
    if (currentMonth === 8) return 31
    if (currentMonth === 1) {
        const isLeap = new Date(currentYear, 1, 29).getMonth() === 1
        return isLeap ? 29 : 28
    }
    if (!(currentMonth % 2) && currentMonth !== 0) return 30
    return 31
}

const setClasses = (arr, currentDate, activeMonth) => arr.map(date => date.map(d => {
        let res = []
        if (
            `${d.getDate()}${d.getMonth()}${d.getFullYear()}` ===
            `${currentDate.getDate()}${currentDate.getMonth()}${currentDate.getFullYear()}`) {
            res.push('activeMain')
        }
        if (d > currentDate) res.push('active')
        if (d < currentDate) res.push('passive')
        if (d.getMonth() === activeMonth && d > currentDate) res.push('activeMonth')
        return {date: d, classes: res}
    })
)

const getCalendarArr = (weekDay, currentDay, currentMonth, currentYear, currentDate) => {
    let res = []
    let isFull = false
    const maxDays = getMaxDays(currentMonth, currentYear)
    let startDay = currentDay - (weekDay - 1)
    while (!isFull) {
        const {currentDay, arr, full} = getUpRow(startDay, currentMonth, currentYear)
        startDay = currentDay
        res.unshift(arr)
        isFull = full
    }
    startDay = currentDay - (weekDay)

    while (res.length < 6) {
        const {currentDay, arr} = getDownRow(startDay, maxDays, currentMonth, currentYear)
        startDay = currentDay
        res.push(arr)
    }

    res = setClasses(res, currentDate, currentMonth)
    return res
}

export default getCalendarArr
