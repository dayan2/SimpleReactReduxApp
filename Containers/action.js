import axios from 'axios';

export function getList(){
    
    return {
      type: 'GET_LIST_SUCCESS',
      payload: new Promise((resolve, reject) => {
        axios.get('http://localhost:53203/api/values').
        then(response => {
          resolve(response.data);
        }).
        catch(error => {
          console.log('dispatch error ' + error);
          reject();
        })
      })
    };
  }