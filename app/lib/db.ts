import { connect } from "mongoose";

let mongodbURL = process.env.MONGODB_URL;
if (!mongodbURL) {
  //agar mongoDB URL empty rahega to error throw krwa denge
  throw new Error("URL is not found.");
}

let cached = global.mongoose; //ek global variable(types.d.ts me) banayaenge kyuki Nextjs me server bar bar start hota h isilie hum log cache me store kr lenge server connection taaki next time fir se server se conection na krna pade

if (!cached) {
  //agar cached empty rahega to cached me global.mongoose store krenge conection ke liye server se aur conn aur promise to initially null kr denge
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {

    console.log("Cached DB Connected")
    //agar cached.conn me kuch h to vhi retrun kr do
    return cached.conn;
  }

  if (!cached.promise) {
    //agar cached.conn me kuch na ho aur promise bhi na ho tb hum log database se connect krenge
    cached.promise = connect(mongodbURL).then((c) => c.connection); //mongoose wala connect use krna h yaha pe aur uske baad .then se aage ka process krenge connection ke liye
  }

  try {
    //agar cached.conn me kuch pending h to usko resolve kro await use krke taaki pending chizein complete hojaye
    cached.conn = await cached.promise;
    console.log("Promise DB Connected")
  } catch (error) {
    throw error;
  }

  return cached.conn;
};

export default connectDB; // connectDB ko export kr do har jagah use krne k liye
