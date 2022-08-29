const errorMsg = {
    icaoNotFound: 'ICAO code not found!',
    icaoIncorrectSyntax: 'Incorrect ICAO code!',
    iataNotFound: 'IATA code not found!',
    iataIncorrectSyntax: 'Incorrect IATA code!',
    addressNotFound: 'Airport address not found!',
    addressIncorrectSyntax: 'Incorrect address!',
}

function verifyIcao (icao) {
    if (icao.length !== 4) return false

    const pattern = /[A-Z]/
    const m = icao.match(pattern)
    return m
}

function verifyIata (iata) {
    if (iata.length !== 3) return false

    const pattern = /[A-Z]/
    const m = iata.match(pattern)
    return m
}

function verifyAddress (address) {
    return true
}

const verifyInput = (req, res, next) => {
    const userInput = req.body

    // verifikasi eksistensi
    if (!('icao' in userInput)) return res.status(400).send({ message: errorMsg.icaoNotFound })
    if (!('iata' in userInput)) return res.status(400).send({ message: errorMsg.iataNotFound })
    if (!('address' in userInput)) return res.status(400).send({ message: errorMsg.addressNotFound })

    // Check tipe dan Change to uppercase
    if (typeof userInput.icao !== 'string') return res.status(400).send({ message: errorMsg.icaoIncorrectSyntax })
    userInput.icao = userInput.icao.toUpperCase()

    if (typeof userInput.iata !== 'string') return res.status(400).send({ message: errorMsg.iataIncorrectSyntax })
    userInput.iata = userInput.iata.toUpperCase()

    if (typeof userInput.address !== 'string') return res.status(400).send({ message: errorMsg.addressIncorrectSyntax })

    // verifikasi syntax
    if (!verifyIcao(userInput.icao)) return res.status(400).send({ message: errorMsg.icaoIncorrectSyntax })
    if (!verifyIata(userInput.iata)) return res.status(400).send({ message: errorMsg.iataIncorrectSyntax })
    if (!verifyAddress(userInput.address)) return res.status(400).send({ message: errorMsg.addressIncorrectSyntax })
    
    next()
}

const airport = { verifyInput }

module.exports = airport