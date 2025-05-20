import create from 'zustand';

interface CurrencyState {
  currency: string;
  setCurrency: (currency: string) => void;
  convertPrice: (price: number, fromCurrency: string, toCurrency: string) => number;
}

const exchangeRates = {
  EUR: 1,
  USD: 1.09,
  GBP: 0.85,
  MAD: 11.02
};

export const useCurrencyStore = create<CurrencyState>((set) => ({
  currency: 'EUR',
  setCurrency: (currency) => set({ currency }),
  convertPrice: (price, fromCurrency, toCurrency) => {
    const priceInEUR = price / exchangeRates[fromCurrency as keyof typeof exchangeRates];
    return priceInEUR * exchangeRates[toCurrency as keyof typeof exchangeRates];
  }
}));