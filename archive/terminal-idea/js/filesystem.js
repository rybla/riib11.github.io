log_loaded("js/filesystem.js")

class FileSystemObject {
    constructor(name, content, fstype) {
        this.fstype = fstype
        this.name = name
        this.content = content
    }

    getName() { return this.name }
    setName(name) { this.name = name }

    getContent() { return this.content }
    setContent(content) { this.content = content }
}

class File extends FileSystemObject {
    constructor(name, content, runnable=false) {
        super(name, content, 'File')
        self.runnable = runnable
    }
}

class Dir extends FileSystemObject {
    constructor(name, content) {
        super(name, content, 'Dir')
    }

    hasChild(name) {
        return this.content.hasOwnProperty(name)
    }

    getChild(name) {
        if (this.content.hasOwnProperty(name))
            return this.content[name]
        return false
    }

    setChild(fsobj) {
        this.content[fsobj.getName()] = fsobj
        return fsobj
    }
}

var rootdir = new Dir("/",{})

function parsePath(string) {
    let string_split = string.split("/")
    let path = []
    for (var i = 0; i < string_split.length; i++) {
        if (string_split[i].length > 0)
            path.push(string_split[i])
    }
    return path
}

function getFSObject(path) {
    let result = rootdir
    for (var i = 0; i < path.length; i++) {
        if (result.hasChild(path[i])) {
            result = result.getChild(path[i])
        } else {
            return false
        }
    }
    return result
}

// returns 'File' or 'Dir'
function getPathType(path) {
    let fsobj = getFSObject(path)
    if (fsobj)
        return result.fstype
    return false
}

function getDir(path) {
    let dir = getFSObject(path)
    if (dir && dir.fstype == 'Dir')
        return dir
    return false
}

function getFile(path) {
    let file = getFSObject(path)
    if (file && file.fstype == 'File')
        return file
    return false
}

function setFSObj(path, fsobj) {
    let parent = getDir(path)
    if (parent)
        return parent.setChild(fsobj)
    return false
}

function listDir() {
    // args
    let dir = eval(arguments[0])
    let rec = false
    let lvl = 0

    let result = new HyperString()
    if (rec) {
        let indent = repeatString(htmlspace,lvl*2)
        indent = lvl==0 ? indent : indent.substring(0,indent.length-1)+"| "
        for (var k in dir.getContent()) {
            let x = dir.getChild(k)
            result.add( new HyperString(indent, "structural") )
            if (x.fstype == 'Dir') {
                result.add( new HyperString(x.name+"/\n", "dirname") )
                result.add( listDir(x, true, lvl+1) )
            } else
            if (x.fstype == 'File') {
                result.add( new HyperString(x.name+"\n", x.runnable ? "runnable" : "filename") )
            }
        }
    } else {
        for (var k in dir.getContent()) {
            let x = dir.getChild(k)
            if (x.fstype == 'Dir')  {
                result.add( new HyperString(x.name+"/\n", "dirname") )
            } else
            if (x.fstype == 'File') {
                result.add( new HyperString(x.name+"\n", x.runnable ? "runnable" : "filename" ) )
            }
        }
    }
    return result
}


// init simple filesystem

setFSObj ( parsePath("/"),     new Dir("home",{}) )
setFSObj ( parsePath("/home"), new Dir("documents",{}) )
setFSObj ( parsePath("/home"), new Dir("applications",{}) )
setFSObj ( parsePath("/home"), new File("readme.txt", "this is a readme file!", true) )