const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'S.sudhakar@1',
    database : 'todo'
});

db.connect((err)=>{
     if(err) {
        console.log("Error connecting to database",err);
        return;
     }
     console.log("Connection to database successful");
});

app.use(cors());
app.use(express.json());

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});

// ✅ Fetch all items
app.get('/',(req,res)=>{
    db.query('SELECT * FROM todoItems',(err,result)=>{
        if(err){
            console.log("Error fetching data",err);
            return res.status(500).send("Error fetching data");
        }
        res.json(result);
    });
});

// ✅ Add item
app.post('/add-item',(req,res)=>{
    const { text } = req.body;
    db.query(`INSERT INTO todoItems(itemDescription) VALUES(?)`, [text], (err,results)=>{
        if(err){
            console.log("Error inserting item",err);
            return res.status(500).send("Error inserting item");
        }
        res.json({ message: "Item added successfully", ID: results.insertId });
    });
});

// ✅ Edit item
app.put('/edit-item', (req, res) => {
    const { ID, itemDescription } = req.body;

    db.query(
        `UPDATE todoItems SET itemDescription = ? WHERE ID = ?`,
        [itemDescription, ID],
        (err, results) => {
            if (err) {
                console.log("Error updating item", err);
                return res.status(500).send("Error updating item");
            }

            if (results.affectedRows > 0) {
                console.log("Item updated successfully");
                res.json({ message: "Item updated successfully" });
            } else {
                res.status(404).send("Item not found");
            }
        }
    );
});


// ✅ Delete item
app.delete('/delete-item/:ID',(req,res)=>{
    const { ID } = req.params;
    db.query(`DELETE FROM todoItems WHERE ID = ?`, [ID], (err, results) => {
        if(err){
            console.log("Error deleting item", err);
            return res.status(500).send("Error deleting item");
        }
        if (results.affectedRows > 0) {
            res.json({ message: "Item deleted successfully" });
        } else {
            res.status(404).send("Item not found");
        }
    });
});
