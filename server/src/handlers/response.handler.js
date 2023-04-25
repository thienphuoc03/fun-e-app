const responseWithData = (res, statusCode, data) =>
  res.status(statusCode).json(data);

const error = res =>
  responseWithData(res, 500, {
    status: 500,
    message: 'Oops! Something worng!',
  });

const badRequest = (res, message) =>
  responseWithData(res, 400, {
    status: 400,
    message,
  });

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

const unauthorize = (res, mess) =>
  responseWithData(res, 401, {
    status: 401,
    message,
  });

const notFound = res =>
  responseWithData(res, 404, {
    status: 404,
    message: 'Resource not found',
  });

const forbidden = res =>
  responseWithData(res, 403, {
    status: 403,
    message: 'Forbidden',
  });

export default {
  error,
  badRequest,
  ok,
  created,
  unauthorize,
  notFound,
  forbidden,
};
