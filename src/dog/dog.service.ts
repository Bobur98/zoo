import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello() {
    return 'Wow-wow';
  }

  public introduce() {
    return 'I am a Dog';
  }
}
