import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose
        .connect(`mongodb://localhost:27017/science`)
        .then(() => console.log('Conectado ao MongoDB!'))
        .catch((error) => console.log(error))
}

export default connectDB