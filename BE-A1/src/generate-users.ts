import { faker } from '@faker-js/faker';

export interface IUser {
    _id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    company: string;
    website: string;
    jobTitle: string;
    bio: string;
    twitter: string;
    facebook: string;
    linkedin: string;
}

export const generateUsers = (count: number): IUser[] => {
    const users: IUser[] = [];
    for (let i = 0; i < count; i++) {
        users.push({
            _id: faker.datatype.uuid.toString(),
            name: faker.name.firstName(),
            surname: faker.name.lastName(),
            email: faker.internet.email(),
            password:faker.internet.password(),
            phone: faker.phone.number(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country(),
            zip: faker.address.zipCode(),
            company: faker.company.name(),
            website: faker.internet.url(),
            jobTitle: faker.name.jobTitle(),
            bio: faker.lorem.paragraph(),
            twitter: faker.internet.userName(),
            facebook: faker.internet.userName(),
            linkedin: faker.internet.userName(),
        });
    }
    return users;
};
    