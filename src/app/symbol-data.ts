import { HttpClient } from '@angular/common/http';

export class SymbolData {
  private http: HttpClient;
  public symbol: string;
  public url: string;
  public updates: Date[] = [];

  private _color: string = randomRgba();

  public promise: Promise<SymbolData>;

  // datapoints and dates will have the same number of elements
  public keys: string[] = ['Open', 'High', 'Low', 'Close', 'Volume', 'Ex-Dividend', 'Split',
               'Adj. Open', 'Adj. High', 'Adj. Low', 'Adj. Close', 'Adj.'];
  public datapoints: any = {
    Open:      [],
    High:      [],
    Low:       [],
    Close:     [],
    Volume:    [],
    'Ex-Dividend': [],
    Split:     [],
    'Adj. Open':   [],
    'Adj. High':   [],
    'Adj. Low':    [],
    'Adj. Close':  [],
    'Adj.':        [],
  };
  public dates: string[] = [];

  constructor(http: HttpClient, url: string, symbol: string) {
    this.url = url;
    this.symbol = symbol;
    this.http = http;
    this.promise = this.getData();
  }

  getData(): Promise<SymbolData> {
    // this is the function that will be called every time but the first time
    this.getData = undefined;  // remove this method since it gets whole datapoint history
    console.log('--> SymbolData.getData <--');
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe(
        (data: {dataset_data: {data: any}} | any) => {
          // console.log(data);
          if (! data.hasOwnProperty('dataset_data')) {
            console.log('Object did not have a dataset property');
            return;
          } else if (! data.dataset_data.hasOwnProperty('data')) {
            console.log('Object.dataset did not have a data property');
            return;
          }
          console.log(`Successfully received data for ${this.symbol}`);

          // set the date as the x-axis
          this.dates.push(...data.dataset_data.data.map(x => x[0]));

          // set the y-axes
          this.keys.forEach((name, i) => {
            console.log(`  [${i}] ${name}`);
            this.datapoints[name].push(...data.dataset_data.data.map(x => x[i + 1]));
          });
        },
        err => {
          console.log(`Error getting url: ${this.url}`);
          console.log(err);
        },
        () => {
          resolve(this);
          // console.log('<-- SymbolData.getData -->');
          this.updates.push(new Date());
        });
    });
  }

  withData(f: any) {
    return this.promise.then(r => {f(r); });
  }

  get color(): string {
    return this._color + '0.1)';
  }

  get solidColor(): string {
    return this._color + '1)';
  }

}

function randomRgba() {
  const o = Math.round;
  const r = Math.random;
  const s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',';
}
