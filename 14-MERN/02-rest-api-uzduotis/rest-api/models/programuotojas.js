import mongoose, { Schema } from 'mongoose';

const DevSchema = new Schema({
    vardas: {
        type: String,
        required: [true, 'Prašome įvesti savo vardą']
    },
    tech: {
        type: [String], // Changed from String to array of strings
        required: [true, 'Prašome įvesti technologijas']
    },
    laisvas: {
        type: Boolean,
        default: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

DevSchema.index({ location: '2dsphere' });

const Dev = mongoose.model('Dev', DevSchema);

export default Dev;