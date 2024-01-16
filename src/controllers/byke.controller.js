import * as bykeService from '../services/byke.service.js';

export const get = (req, res) => {
  res.send(bykeService.getAll());
}

export const getOne = (req, res) => {
  const { id } = req.params;
  const foundByke = bykeService.getById(id);

  if (!foundByke) {
    res.sendStatus(404);
    return;
  }

  res.send(foundByke);
}

export const create = (req, res) => {
  const byke = req.body;

  if (!byke) {
    res.sendStatus(422);
    return;
  }

  bykeService.create(byke);
  res.statusCode = 201;
  res.send(byke);
}

export const update = (req, res) => {
  const { id } = req.params;
  const byke = req.body;
  const foundByke = bykeService.getById(id);

  if (!foundByke) {
    res.sendStatus(404);
    return;
  }

  if (!byke) {
    res.sendStatus(422);
    return;
  }

  bykeService.update(id, byke);
  res.send(foundByke);
}

export const remove = (req, res) => {
  const { id } = req.params;

  if (!bykeService.getById(id)) {
    res.sendStatus(404);
    return;
  }

  bykeService.remove(id);

  res.sendStatus(204);
}
