
import express from 'express';
let app = express();

app.use(express.static('public'));

app.get('*', (req, res)=>{
	res.sendFile(__dirname+'/public/index.html');
})

app.listen(3000);
