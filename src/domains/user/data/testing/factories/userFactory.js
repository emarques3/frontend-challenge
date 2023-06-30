// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

/**
 * Class that provides a static method to generate colors
 * @method `make` - Allows to create color state
 * @returns `{ colorsArray }` object
 */
export class UserFactory {
  static make({ name, email, password, favoriteColor, agreedToTerms, loading } = {}) {
    return {
      name: name ?? faker.person.firstName(),
      email: email ?? faker.internet.email(),
      password: password ?? faker.internet.password(),
      favoriteColor: favoriteColor ?? faker.color.human(),
      agreedToTerms: agreedToTerms ?? faker.datatype.boolean(),
      loading: loading ?? faker.datatype.boolean(),
    };
  }
}
