
function parseCookies(req) {
    var obj = {}
    req?.split(';').forEach((it, i) => {
        obj[it?.split('=')[0]?.trim()] = it?.split('=')[1]
    })
    return obj
}


module.exports = { parseCookies }