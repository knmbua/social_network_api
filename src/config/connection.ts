import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/social_network_api');

export default mongoose.connection;