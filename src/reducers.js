import { get } from "react-hook-form";
import { NOTLARI_SIFIRLA, NOT_EKLE, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";
const storedState = localStorageStateOku(s10chLocalStorageKey);
const baslangicDegerleri = {
  notlar: storedState || [],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri
  }
}

const reducer = (state = baslangicDegerleri, action) => {
  let yeniState;
  switch (action.type) {
    case NOT_EKLE:
      yeniState = {
        ...state,
        notlar: [...state.notlar, action.payload]
      };
      localStorageStateYaz(s10chLocalStorageKey, yeniState);
      return yeniState;

    case NOT_SIL:
      yeniState = {
        ...state,
        notlar: state.notlar.filter((item) => item.id !== action.payload)
      };
      localStorageStateYaz(s10chLocalStorageKey, yeniState);
      return yeniState;

    case NOTLARI_SIFIRLA:
      yeniState = {
        ...state,
        notlar: []
      };
      localStorageStateYaz(s10chLocalStorageKey, yeniState);
      return yeniState;

    default:
      return state;
  }
};
export default reducer;