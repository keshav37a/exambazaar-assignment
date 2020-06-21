import axios from "axios";

export default {
  getAllStreamInfo: async () => {
    try {
      let res = await axios.get("/api/v1/coding-round/exam-info");
      return {
        status: res.status,
        data: res.data,
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        data: [],
      };
    }
  },

  getRandomQuestion: async (examId) => {
    try {
      let body = {};
      body.examId = examId;
      let res = await axios({
        method: "post",
        url: `/api/v1/coding-round/random-question/${examId}`,
        data: body,
      })
      return {
        status: res.data.status,
        data: res.data.data,
      };
    } catch (err) {
      console.log(err);
      return {
        status: 500,
        data: [],
      };
    }
  },
};
