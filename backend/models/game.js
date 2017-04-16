import mongoose from 'mongoose';

const Schema = mongoose.Schema;
 
const Game = new Schema({
    title: String
});
 
export default mongoose.model('games', Account);