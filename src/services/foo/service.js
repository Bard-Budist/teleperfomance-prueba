// Description: Service file to have operations in DB

const client = require('../../mongo/connection');

/**
 * @description This method get foo data for MongoDb data base
 * @returns {object} object colletion name
 */
const getFooData = async () => {
  
  try {
    if (!client.isConnected()) {
      await client.connect();
    }

    const database = client.db(process.env.DB_NAME);
    const names = database.collection('names');

    const name = await names.findOne();

    return {
      'name': name.name
    };

  } catch (error){
    throw "Error try get data from MongoDb";
  }
}

module.exports = {
  getFooData
};