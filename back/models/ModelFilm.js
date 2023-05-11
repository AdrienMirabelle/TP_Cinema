import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
    titre: { type: String, required: true, set: (value) => value.charAt(0).toUpperCase() + value.slice(1) },
    annee: { type: Number, required: true, default: 0 },
    realisateur: { type: String, required: true, default: "N/A" },
    scenariste: { type: String, required: true, default: "N/A" },
    studio: { type: String, required: true, default: "N/A" },
    genre: { type: [String], required: true, default: "N/A" },
    langue: { type: String, required: true, default: "N/A" },
    duree: { type: Number, required: true, default: 0 },
    distribution: [{
        nom: { type: String, required: true, default: "N/A" },
        role: { type: String, required: true, default: "N/A" }
    }],
    img: { type: String, required: true, default: "/default_img.jpg" },
    synopsis: { type: String, required: true, default: "N/A" },
});

const Film = mongoose.model('Film', filmSchema);
export default Film;