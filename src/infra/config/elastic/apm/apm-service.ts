import elasticApm from 'elastic-apm-node';
import { ENV } from '../../../../util/environment';

const { OBSERVABILITY } = ENV;

export class ApmService {
  private static instance: elasticApm.Agent | null = null;

  public static startElastic() {
    try {
      if (!ApmService.instance) {
        const newApmInstance = elasticApm.start({
          serviceName: 'gym-management',
          serverUrl: OBSERVABILITY.APM_URL,
          secretToken: OBSERVABILITY.APM_TOKEN,
          environment: OBSERVABILITY.APM_ENVIRONMENT,
          logLevel: 'trace',
        });

        ApmService.instance = newApmInstance;
        console.log('--- Apm instance initialized ---');
      }
    } catch (error) {
      console.log('Error on instance apm');
    }
  }
}
