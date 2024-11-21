import Dev from '../models/programuotojas.js';

// Existing Controllers
export const prog_get = (req, res) => {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);

    if (!isNaN(lng) && !isNaN(lat)) {
        console.log('Parsed coordinates:', lng, lat);
        Dev.aggregate([
            {
                $geoNear: {
                    near: {
                        type: 'Point',
                        coordinates: [lng, lat]
                    },
                    distanceField: 'distance',
                    spherical: true,
                    maxDistance: 100000 // Adjust as needed (in meters)
                }
            }
        ])
        .then(devs => {
            console.log('Found devs:', devs);
            res.send(devs);
        })
        .catch(err => {
            console.log('Error:', err);
            res.status(500).send(err.message);
        });
    } else {
        Dev.find()
            .then(devs => {
                console.log('Found devs:', devs);
                res.send(devs);
            })
            .catch(err => {
                console.log('Error:', err);
                res.status(500).send(err.message);
            });
    }
}

export const prog_post = (req, res) => {
    const { vardas, tech, laisvas, coordinates } = req.body;

    // Basic validation
    if (!vardas || !tech || !coordinates || coordinates.length !== 2) {
        return res.status(400).send({ error: 'Neatitinka reikalavimai' });
    }

    const dev = new Dev({
        vardas,
        tech,
        laisvas: laisvas || true,
        location: {
            type: 'Point',
            coordinates
        }
    });

    dev.save()
        .then(() => {
            console.log('Dev saved:', dev);
            res.status(201).send(dev);
        })
        .catch(err => {
            console.log('Error:', err);
            res.status(500).send(err.message);
        });
}

// Existing PUT and DELETE Controllers...
export const prog_put = (req, res) => {
    const id = req.params.id;
    const { vardas, tech, laisvas, coordinates } = req.body;

    Dev.findById(id)
        .then(dev => {
            if (!dev) {
                return res.status(404).send({ error: 'Programuotojas nerastas' });
            }

            // Update fields if provided
            if (vardas !== undefined) dev.vardas = vardas;
            if (tech !== undefined) dev.tech = tech;
            if (laisvas !== undefined) dev.laisvas = laisvas;
            if (coordinates !== undefined && coordinates.length === 2) {
                dev.location.coordinates = coordinates;
            }

            return dev.save();
        })
        .then(updatedDev => {
            res.status(200).send(updatedDev);
        })
        .catch(err => {
            console.log('Error during update:', err);
            res.status(500).send(err.message);
        });
}

export const prog_delete = (req, res) => {
    const id = req.params.id;

    Dev.findByIdAndDelete(id)
        .then(deletedDev => {
            if (!deletedDev) {
                return res.status(404).send({ error: 'Programuotojas nerastas' });
            }
            res.status(200).send({ message: 'Programuotojas ištrintas', deletedDev });
        })
        .catch(err => {
            console.log('Error during deletion:', err);
            res.status(500).send(err.message);
        });
}