import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const HallDetail = () => {
  const { id } = useParams();

  const HallDetail_show = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/halls/show/${id}`);
      console.log(response);
    } catch (error) {
      console.error("불러오기 실패");
    }
  };

  useEffect(() => {
    if (id) {
      HallDetail_show();
    }
  }, [id]);

  return <></>;
};

export default HallDetail;
