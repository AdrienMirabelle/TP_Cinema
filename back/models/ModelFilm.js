import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    annee: { type: Number, required: true },
    realisateur: { type: String, required: true },
    scenariste: { type: String, required: true },
    studio: { type: String, required: true },
    genre: { type: [String], required: true },
    langue: { type: String, required: true },
    duree: { type: Number, required: true },
    distribution: [{
        nom: { type: String, required: true },
        role: { type: String, required: true }
    }]
});

const Film = mongoose.model('Film', filmSchema);
export default Film;