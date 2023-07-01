import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const resArr = [];
      for (let i = 0; i < values.length; i += 1) {
        resArr.push({
          status: values[i].status,
          value: values[i].value ? values[i].value : `${values[i].reason}`,
        });
      }
      return resArr;
    });
}
