import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SymbolData } from './symbol-data';

@Injectable({
  providedIn: 'root'
})
export class HistGetterService {

  public datasets: Map<string, SymbolData> = new Map();

  constructor(private http: HttpClient) {  }

  fetchSymbol(symbol: string): void {
    let url: string = `https://www.quandl.com/api/v3/datasets/WIKI/${symbol}/data.json?api_key=uj-G9RyGCpTrKwkfJtMT&limit=20`;
    let data: SymbolData = new SymbolData(this.http, url, symbol);
    this.datasets.set(symbol, data);
  }

  getSymbol(symbol: string): SymbolData | undefined {
    if(symbol in this.datasets.keys()) {
      return this.datasets.get(symbol);
    } else{
      this.fetchSymbol(symbol);
      return this.datasets.get(symbol);
    }
  }

}
// 'https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?start_date=2018-01-01&api_key=uj-G9RyGCpTrKwkfJtMT'