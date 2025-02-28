import { apmServiceFactory } from './infra/config/elastic/apm/apm-service-factory';
import { expressServerFactory } from './infra/config/express/express-server-factory';
import { ENV } from './util/environment';

apmServiceFactory();

const { SERVER } = ENV;

const PORT = SERVER.PORT;
const app = expressServerFactory();

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
