import { Context, Service } from 'egg';

export default class HomeService extends Service {
  constructor(ctx: Context) {
    super(ctx);
  }

  index(): string {
    return 'I love Egg.js and TypeScript.';
  }
}
