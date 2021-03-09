import { types } from '../types/types';

export const salaAddNew = (event) => ({
  type: types.salaAddNew,
  payload: event,
});

export const salaUpdate = (event) => ({
  type: types.salaUpdate,
  payload: event,
});

export const salaRemove = (event) => ({
  type: types.salaRemove,
  payload: event,
});
