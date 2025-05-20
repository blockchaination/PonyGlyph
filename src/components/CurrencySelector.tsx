import React from 'react';
import { useCurrencyStore } from '../stores/currencyStore';

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrencyStore();

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="ml-2 p-1 rounded border border-gray-300 text-sm"
    >
      <option value="EUR">EUR (€)</option>
      <option value="USD">USD ($)</option>
      <option value="GBP">GBP (£)</option>
      <option value="MAD">MAD (د.م.)</option>
    </select>
  );
}