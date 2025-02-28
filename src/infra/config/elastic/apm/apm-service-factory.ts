import { ApmService } from './apm-service';

export const apmServiceFactory = () => ApmService.startElastic();
