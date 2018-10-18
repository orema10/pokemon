var pokemonService = require('../services/pokemonService.js')

module.exports = (app) => {
    // Single pokemon by nmae
    app.get('/getNewJson/:pokemonName', (req, res) => {
        const pokemonName = req.params.pokemonName;
        res.json(pokemonService.getByName(pokemonName))
    });

    app.post('/getNewJson', (req, res) => {
        return 8;
        // pokemonService.query()
    });
}

