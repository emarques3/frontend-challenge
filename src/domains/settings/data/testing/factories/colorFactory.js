// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

export class ColorFactory {
  static make({ colorsArray, loading } = {}) {
    return {
      colorsArray:
        colorsArray ??
        faker.helpers.arrayElement([
          faker.color.human(),
          faker.color.human(),
          faker.color.human(),
          faker.color.human(),
        ]),
      loading: loading ?? faker.datatype.boolean(),
    };
  }
}
