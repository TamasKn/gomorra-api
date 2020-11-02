exports.Helper = {

    Sanitize(str) {
        return str.toLowerCase().replace(/[^a-zA-Z]/g, "")
    }
}