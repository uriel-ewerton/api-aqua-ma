const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conexão com o banco feita com sucesso!');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Sai do processo com falha
    }
};

module.exports = connectDB;