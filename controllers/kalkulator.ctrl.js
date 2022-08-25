const PPH = process.env.PPH

exports.hitungZakat = (req, res) => {
    const harta = req.body.harta
    res.send({ zakat: harta * .025 })
}

exports.hitungPph = (req, res) => {
    const harga = req.body.harga
    res.send({
        pph: harga * PPH,
        total: harga + (harga * PPH)
    })
}