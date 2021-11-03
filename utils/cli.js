const parseArguments = (args) => {
    const [,, regExp, ...paths] = args;
    return {
        regExp: new RegExp(regExp),
        paths
    }
}

export { parseArguments }