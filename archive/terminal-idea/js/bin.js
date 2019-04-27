log_loaded("js/bin.js")

var bin = new Dir("bin",{})
setFSObj("/", bin)

// takes just the command name itself
function isBinCommand(cmd) {
    for (var file in bin.getContent()) {
        if (file.name == cmd) { return true }
    }
    return false
}

// takes the list of command line arguments,
// including the (leading) command
// presumes that you've already checked `isBinCommand`
function runBinCommand(args) {
    if (args.length < 1) { return false }
    let cmd = args[0]
    let cmdargs = args.slice(1,args.length)
    let fbin = bin.getChild(cmd)
    console.log(fbin)
    let pgm = fbin.getContent().split(" ")
    // get function
    func = eval(pgm[0])
    funcargs = pgm.slice(1,pgm.length)
    // combine args
    for (var i = 0; i < funcargs.length; i++) {
        // fill in placeholders
        if (i < cmdargs.length)
            funcargs[i] = cmdargs[i]
    }
    // if more arguments
    if (cmdargs.length > funcargs.length)
        funcargs.concat(cmdargs.slice(funcargs.length,cmdargs.length))
    // run function
    func(funcargs)
}

// for bin content, the first word is the name of the corresponding
// function to call, and the following words are the default values for
// the first arguments to the function

bin.setChild(new File("ls", "listDir currentpath"))