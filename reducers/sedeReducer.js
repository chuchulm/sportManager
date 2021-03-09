import { types } from '../types/types';

const initialState = {
  data: [],
};

export const sedeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.sedeAddNew:
      return {
        data: [...state.data, { ...action.payload, salas: [] }],
      };

    case types.sedeUpdate:
      return {
        ...state,
        data: state.data.map((e) => (e.id === action.payload.id ? { ...e, ...action.payload } : e)),
      };

    case types.sedeRemove:
      return {
        ...state,
        data: state.data.filter((e) => e.id !== action.payload),
      };

    case types.salaAddNew: {
      const { name, id, selectedSede } = action.payload;
      // busco en que posicion del array esta la sede a la que le quiero agregar la sala
      const sedeIndex = state.data.findIndex((e) => e.id === selectedSede);

      let updatedSede = state.data[sedeIndex];
      updatedSede = {
        ...updatedSede,
        salas: [...updatedSede.salas, { name, id }],
      };

      return {
        ...state,
        data: state.data.map((e) => (e.id === selectedSede ? { ...updatedSede } : e)),
      };
    }

    case types.salaRemove: {
      const { sedeId, salaId } = action.payload;
      const sedeIndex = state.data.findIndex(({ id }) => id === sedeId);
      debugger;
      const salaIndex = state.data[sedeIndex].findIndex((e) => e.id === salaId);
      // busco en que posicion del array  state.data.salas esta la sala que quiero borrar
      let updatedSede = state.data[sedeIndex];
      updatedSede = {
        ...updatedSede,
        salas: updatedSede.salas.splice(salaIndex, 1),
      };
      return {
        ...state,
        data: state.data.map((e) => (e.id === sedeId ? { ...updatedSede } : e)),
      };
    }

    default:
      return state;
  }
};
