import { Test } from '@nestjs/testing';

import { BlogService } from './blog.service';
import { getModelToken } from '@nestjs/mongoose';

describe('AppService', () => {
  let service: BlogService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        BlogService,
        { provide: getModelToken('Blog'), useValue:null}
    ],
    }).compile();

    service = app.get<BlogService>(BlogService);
  });

  describe('kebab title', () => {
    it('should make - from all whitespace', () => {
      expect(service.getKebabTitle('this is  a    test to check')).toEqual('this-is-a-test-to-check');
    });

    it('should make all lower case', () => {
        expect(service.getKebabTitle('This is  a    Test to check')).toEqual('this-is-a-test-to-check');
    });
  });
});