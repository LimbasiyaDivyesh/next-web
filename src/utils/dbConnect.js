import mongoose from 'mongoose';

export default async function dnConnect() {

    const db = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
        .then(() => {
            console.log("Successfully connected to the database");
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...');
        });
}