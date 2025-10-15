import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class myTranslateService {

  constructor(
    private translate: TranslateService
  ) { }

  async translateObject(obj: any, lang: string): Promise<any[]> {
    var items = [] as any[];
    obj.forEach(async (item: any) => {
      items.push(Object.fromEntries(
        await Promise.all(
          Object.entries(item).map(async ([key, value]) => {
            if (typeof value === "string" && value.startsWith("MY_")) {
              return [key, await this.translateLabel(value, lang)];
            }

            return [key, value];
          })
        )
      ));
    }); 

    return items;
  }

  async translateLabel(label: any, lang: string):Promise<string> {
    await this.translate.use(lang).toPromise();
    return this.translate.get(label).toPromise();
  }
}
