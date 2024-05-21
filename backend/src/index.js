import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import path from "path";


const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// ------- DB Connection -----------------------
//----------------------------------------------

const mongoURI="mongodb+srv://ibaraaouche:ayLBKFOuUI0LX9e1@cluster1.9gfgzrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err));

// --------- Create Model ------------------
//------------------------------------------
const financialRecordSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    paymentMethod: { type: String, required: true },
});

const FinancialRecordModel = mongoose.model(
    "FinancialRecord",
    financialRecordSchema
);

// -------- Create Routes -----------------
//-----------------------------------------
const router = express.Router();

router.get("/getAllByUserID/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const records = await FinancialRecordModel.find({ userId: userId });
      if (records.length === 0) {
        return res.status(404).send("No records found for the user.");
      }
      res.status(200).send(records);
    } catch (err) {
      res.status(500).send(err);
    }
});

router.post("/", async (req, res) => {
    try {
      const newRecordBody = req.body;
      const newRecord = new FinancialRecordModel(newRecordBody);
      const savedRecord = await newRecord.save();
  
      res.status(200).send(savedRecord);
    } catch (err) {
      res.status(500).send(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const newRecordBody = req.body;
      const record = await FinancialRecordModel.findByIdAndUpdate(
        id,
        newRecordBody,
        { new: true }
      );
  
      if (!record) return res.status(404).send();
  
      res.status(200).send(record);
    } catch (err) {
      res.status(500).send(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const record = await FinancialRecordModel.findByIdAndDelete(id);
      if (!record) return res.status(404).send();
      res.status(200).send(record);
    } catch (err) {
      res.status(500).send(err);
    }
});



app.use("/financial-records", router);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend","dist", "index.html"));
});


app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});