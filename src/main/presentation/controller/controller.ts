import { HttpRequest, HttpResponse } from '../../domain/models';

export interface Controller {
  handler(httpRequest: HttpRequest): Promise<HttpResponse>;
}
