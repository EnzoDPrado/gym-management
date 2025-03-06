import { HttpResponse } from "../main/domain/models";

export const badRequest = (error: any): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: {message: "Internal server error", error: error},
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const caught = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
});
