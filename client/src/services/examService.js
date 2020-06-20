import axios from 'axios';

export default {

  getAllStreamInfo: async () =>{
    try{
        let res = await axios.get('/api/v1/coding-round/exam-info');
        console.log(res);
        return {
            status: res.status,
            data: res.data
        }
    }
    catch(err){
        console.log(err);
    }
  },
}
