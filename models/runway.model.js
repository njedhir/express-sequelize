module.exports = (sequelize, Sequelize) => {
    const Runway = sequelize.define('runway', {
        designator: { type: Sequelize.STRING(4) },
        length: { type: Sequelize.INTEGER(5) },
    })
    return Runway
}