import request from 'superagent';

export function getAllCrime() {
  return new Promise ((reject, resolve) => {
    request
      .get('http://alexadusei.com:3000/api/getcrimes')
      .withCredentials()
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          console.log(err);
          reject(err);
          console.log('rejecting');
        } else {
          resolve(res.body);
          console.log('resolving');
        }
    });
  });
};
