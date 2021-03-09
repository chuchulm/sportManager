import { types } from '../types/types';

export const sedeAddNew = (event) => ({
  type: types.sedeAddNew,
  payload: event,
});

export const sedeUpdate = (event) => ({
  type: types.sedeUpdate,
  payload: event,
});

export const sedeRemove = (event) => ({
  type: types.sedeRemove,
  payload: event,
});
