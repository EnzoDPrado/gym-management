import { expressServerFactory } from './config/express/express-server-factory';
import { ENV } from './util/environment';

const { SERVER } = ENV;

const PORT = SERVER.PORT;
const app = expressServerFactory();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
