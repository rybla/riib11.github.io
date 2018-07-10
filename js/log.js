function log(msg, dict={}) {
    data = ""
    for (var key in dict) { data += key + ": " + dict[key] + "; " }
    console.log("%c " + msg, data)
}

const pad_vert = "4px"
const pad_hori = "4px"
function log_loaded(filename) {
    log("[#] loaded "+filename, {
        "color": "white",
        "background": "blue",
        "padding-left":pad_hori, "padding-right":pad_hori,
        "padding-top":pad_vert, "padding-bottom":pad_vert,
    })
}

log_loaded("js/log.js")