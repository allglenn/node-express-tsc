import express,{Application,Request,Response} from 'express';

const app: Application = express();
const port: number = 3000 ;

app.get("/", (req: Request,res: Response) => {
    res.json({
        message: "hi tsc from express server"
    });
});


app.listen(port,() => {
    console.log("hello the server is up now")
});