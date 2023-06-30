// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';

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
