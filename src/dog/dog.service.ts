import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Wow-wow';
  }

  public introduce(): string {
    return 'I am a Dog';
  }

  public modifyDetail(): string {
    return 'Successfully modified';
  }
}
