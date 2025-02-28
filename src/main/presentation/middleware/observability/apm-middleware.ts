import { NextFunction, Request, Response } from 'express';
import apm from 'elastic-apm-node';

export const apmMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  if (response.locals.user) {
    const user = response.locals.user;

    apm.setUserContext({
      id: user.user_id,
    });
  }

  apm.setCustomContext({
    plan: response.locals.user?.plan_id || 'free',
    requestId: request.headers['x-request-id'],
  });

  apm.addLabels({ endpoint: request.originalUrl });

  return next();
};
