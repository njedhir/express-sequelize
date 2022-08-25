module.exports = (sequelize, Sequelize) => {
    const Airport = sequelize.define('airport', {
        icao: { type: Sequelize.STRING(4) },
        iata: { type: Sequelize.STRING(3) },
        address: { type: Sequelize.STRING(256) }
    })
    return Airport
}