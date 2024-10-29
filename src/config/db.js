import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose
        .connect(`${process.env.URI}`)
        .then(() => console.log('Conectado ao MongoDB!'))
        .catch((error) => console.log(error))
}

export default connectDB