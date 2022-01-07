import axios from 'axios';
import { useEffect } from 'react';

function PageReviewList() {
  const [reviewList, setReviewList] = useEffect([]);

  const refetch = () => {
    const url = 'http://localhost:8000/shop/api/reviews/';
    // Promise 객체
    axios
      .get(url)
      .then((response) => {
        console.log('정상 응답');
        console.log(response);
        console.groupEnd();
      })
      .catch((error) => {
        console.log('에러 응답');
        console.log(error);
        console.groupEnd();
      });
  };

  return (
    <div>
      <h2>Review List</h2>
      <hr />
      {JSON.stringify(reviewList)}
    </div>
  );
}

export default PageReviewList;
