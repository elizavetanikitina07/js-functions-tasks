// BEGIN
const getGirlFriends = (users) => {
  const allFriends = users.map(({ friends }) => friends).flat();
  return allFriends.filter(({ gender }) => gender === 'female');
};
export default getGirlFriends;
// END