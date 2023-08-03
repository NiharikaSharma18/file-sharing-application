import mongoose from 'mongoose'
const DBConnection = async () =>{
          const MONODB_URI=`mongodb://niharika:babby1808@ac-3ksn6eu-shard-00-00.ctfm9xq.mongodb.net:27017,ac-3ksn6eu-shard-00-01.ctfm9xq.mongodb.net:27017,ac-3ksn6eu-shard-00-02.ctfm9xq.mongodb.net:27017/?ssl=true&replicaSet=atlas-464c9d-shard-0&authSource=admin&retryWrites=true&w=majority`;   
        try {
            await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
            console.log('Database connected successfully');
        } catch (error) {
            console.log('Error while connecting with the database ', error.message);
        }
    
    
}
export default DBConnection;