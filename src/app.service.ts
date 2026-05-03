import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

 
  getAllHello() {
    return 'Showing all hello items';
  }

  getHello(id: Number) {
    return `Hello item with ID ${id}`;
  }

  postHello(): string {
    return 'Hello World Posted!';
  }

  patchHello(): string {
    return 'Hello World Patched!';
  }

  updateHello(): string {
    return 'Hello World Updated!';
  }

  deleteHello(): string {
    return 'Hello World Deleted!';
  }
}