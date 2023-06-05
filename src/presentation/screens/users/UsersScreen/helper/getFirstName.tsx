import { IUser } from '@domain/models/IUser';

export const getFirstName = (item: IUser, users: IUser[]) => {
  const originalFirstName = item.name.split(' ')[0];
  const lastName = item.name.split(' ')[1];

  const duplicates = users.filter((user) => {
    const userFirstName = user.name.split(' ')[0];
    return userFirstName.toLowerCase() === originalFirstName.toLowerCase();
  });

  if (duplicates.length > 1 && lastName) {
    return `${originalFirstName} ${lastName}`;
  } else {
    return originalFirstName;
  }
};
