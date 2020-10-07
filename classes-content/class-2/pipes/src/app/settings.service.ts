import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocale(): string {
    return 'pt-BR';
  }
}
