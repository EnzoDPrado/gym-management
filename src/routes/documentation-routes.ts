import { Router } from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerDocumentation from '../infra/config/swagger/swaggger.json'

const router = Router();

router.use('/get', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));

export default router;
