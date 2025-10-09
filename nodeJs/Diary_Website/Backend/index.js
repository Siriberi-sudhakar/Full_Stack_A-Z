const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mysql2 = require("mysql2");

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// DB connection

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S.sudhakar@1',
    database: 'myDiary'
})

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
})






app.get('/',(req,res)=>{
    res.status(200).json({message:"Server is up and running"});
})

app.post('/registerUser', async (req,res)=>{
    //console.log(req.body);
    const {email, password} = req.body;
    
    try{
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed Password:', hashedPassword);
        // Log the data (you can store this data in a database later)
        connection.query(`insert into Users(EmailID, HashedPassword) values('${email}', '${hashedPassword}')`, (err,results)=>{
            if(err)
            {
                res.status(500).send('no')
            }
            res.status(200).send('okey')
        })
    }
    catch(err){
        console.error(err);
        res.status(500).send('error while hashing password');
    }
})


app.post('/userLogin', async (req,res) => {
    console.log("User login attempt:", req.body);
    const {email, password} = req.body;

    try {
        connection.query(`select ID,HashedPassword from Users where EmailID = '${email}'`, async (err,result)=>{
            if(err){
                console.error('Database error during login:', err);
                return res.status(500).json({error: 'Database error'});
            }
            
            // Check if user exists
            if(!result || result.length === 0) {
                console.log('User not found:', email);
                return res.status(401).json({error: 'Incorrect email or password'});
            }

            const hashedPassword = result[0].HashedPassword;
            const userID = result[0].ID;
            
            console.log('Comparing passwords for user:', userID);
            
            try {
                const passwordMatch = await bcrypt.compare(password, hashedPassword);
                console.log('Password match result:', passwordMatch);
                
                if(passwordMatch){
                    console.log('Login successful for user:', userID);
                    return res.status(200).json({userID: userID});
                } else {
                    console.log('Password mismatch for user:', email);
                    return res.status(401).json({error: 'Incorrect email or password'});
                }
            } catch (bcryptError) {
                console.error('Bcrypt error:', bcryptError);
                return res.status(500).json({error: 'Authentication error'});
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({error: 'Server error'});
    }
})

app.post('/newPost', async (req, res) => {
    const {postTitle, postDescription, userID} = req.body;
    connection.query(`insert into Posts(UserID, postTitle, postDescription) values(${userID},'${postTitle}', '${postDescription}')`, async (err,response) =>{
        if(err){
            console.error('Error creating post:', err);
            res.status(500).json({error: 'Failed to create post'});
            return
        }
        res.status(200).json({message: 'Post created successfully', postId: response.insertId})
    })

    console.log("New Post ", req.body);

})

app.get('/getMyPosts', async (req,res)=>{
    connection.query(`select * from Posts where UserID = ${req.query.userID} ORDER BY ID DESC`, (err,result)=>{
        if(err){
            console.error('Error fetching posts:', err);
            res.status(500).json({error: 'Failed to fetch posts'});
            return
        }
        res.status(200).json(result);
    })
})

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})