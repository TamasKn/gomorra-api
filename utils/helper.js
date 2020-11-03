exports.Helper = {

    Sanitize(str) {
        return str.toLowerCase().replace(/[^a-zA-Z]/g, "")
    },

    RandomNum(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max - min + 1)) + min
    },

    GenerateRandomIDs(source) {

        // Generate 10 random numbers, the first 3 are from the main characters

        const arr1 = []
        const arr2 = []

        while(arr1.length < 3) {
            const Primary = this.RandomNum(0,10)
            if(!arr1.includes(Primary)) {
                arr1.push(Primary)
            }
        }

        while(arr2.length < 7) {
            const Secondary = this.RandomNum(11, source.length - 1)
            if(!arr2.includes(Secondary)) {
                arr2.push(Secondary)
            }
        }

        return [...arr1, ...arr2]
    }
}