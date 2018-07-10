log_loaded("js/hyperstring.js")

class HyperString {
    constructor(string="",htmlclass="") {
        if (string == "") {
            this.strings = []
            this.htmlclasses = []
        } else {
            this.strings = [string]
            this.htmlclasses = [htmlclass]
        }
    }

    add(hs) {
        this.strings = this.strings.concat(hs.strings)
        this.htmlclasses = this.htmlclasses.concat(hs.htmlclasses)
    }

    toHTML(target=null) {
        let html = target ? target : document.createElement("span")
        for (var i = 0; i < this.strings.length; i++) {
            let span = document.createElement("span")
            span.innerHTML = this.strings[i].replace("\n","<br>")
            span.className = this.htmlclasses[i]
            html.appendChild(span)
        }
        return html
    }
}