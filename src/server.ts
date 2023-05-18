import express, {Request, Response, ErrorRequestHandler } from "express"
import path from 'path';
import dotenv from 'dotenv';
import cors from "cors";
import produtosRoutes from './routes/produtos';
import clientesRoutes from './routes/clientes';

dotenv.config()
const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.use("/produtos", produtosRoutes)
server.use("/clientes", clientesRoutes)

//todas as endpoints validas devem ser informada acima desse coment
server.use((req: Request, res: Response) => { //retorna quando a endpoint nao for encontrada
  res.status(404);
  res.json({ error: 'Endpoint não encontrado.' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400); // Bad Request
  console.log(err);
  res.json({ error: 'Ocorreu algum erro.' });
}
server.use(errorHandler);

server.listen(process.env.PORT, ()=>{
  console.log('Servidor iniciado na porta ' + process.env.PORT)
});