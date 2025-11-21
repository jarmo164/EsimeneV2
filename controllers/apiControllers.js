export function apiHelloCntrl (req, res) {
    if (!req.query.nimi) {
        res.json({ error: 'Nimi on kohustuslik' })
        return
    }
    
    const hello = {
        message: 'Tere maailm, aga eriti sina, ' + req.query.nimi,
        details: 'põhjapanev sõnum kõigile: we come in pease',
    }

    res.json(hello)
}