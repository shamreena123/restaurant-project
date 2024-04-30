/*import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};


  app.get('/insert', async (req, res) => {
    try {
      const result = await collection.insertOne({ firstName: 'John',lastName:'Kennedy', email: 'john@example.com',phone:'8136954014', time:'09:12',date:'07/09/2002' });
      res.send(`Inserted document ID: ${result.insertedId}`);
    } catch (err) {
      console.error('Error inserting document:', err);
      res.status(500).send('Error inserting document');
    }
  });

  // Close the connection when the server is stopped
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
  });

  process.on('SIGINT', () => {
    console.log('Closing MongoDB connection');
    dbConnection.close();
    process.exit();
  });
});

export default db;*/



/*import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: String,
  date: Date
});

const Reservation = mongoose.model("Reserve", reservationSchema);

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");

      addReservation();
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to database: ${err}`);
    });
};

const addReservation = () => {
  const reservationData = { firstName: 'John',lastName:'Kennedy', email: 'john@example.com',phone:'8136954014', time:'09:12',date:'07/09/2002' };


  const newReservation = new Reservation(reservationData);


  newReservation.save()
    .then(() => {
      console.log("Reservation added successfully!");
    })
    .catch((err) => {
      console.error("Error adding reservation:", err);
    });
};
*/


import mongoose from "mongoose";
import { Reservation } from "../models/reservationSchema.js";

// Function to establish MongoDB connection
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");

      // Call function to add data once connected
      addReservation();
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to database: ${err}`);
    });
};

// Function to add a reservation
const addReservation = () => {
  // Example reservation data
  const reservationData = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "1234567890",
    time: "12:00 PM",
    date: "2024-05-01"
  };

  // Create a new reservation document
  const newReservation = new Reservation(reservationData);

  // Save the new reservation document to the database
  newReservation.save()
    .then(() => {
      console.log("Reservation added successfully!");
    })
    .catch((err) => {
      console.error("Error adding reservation:", err);
    });
};

