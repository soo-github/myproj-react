import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ReviewForm() {
  const { reviewId } = useParams();
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);

  const [fieldValues, setFieldValues] = useState({
    content: '',
    score: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = 'http://localhost:8000/shop/api/reviews/';
    axios
      .post(url, fieldValues)
      .then(() => {
        navigate('/reviews/');
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setFieldValues({}));
  };

  useEffect(() => {
    if (reviewId) {
      const url = `http://localhost:8000/shop/api/reviews/${reviewId}`;
      axios
        .get(url)
        .then(({ data }) => setReview(data))
        .catch((error) => setError(error));
    } else {
      setReview(null);
    }
  }, [reviewId]);

  return (
    <div>
      <h2>ReviewForm</h2>
      <br />

      <div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            평점
          </label>
          <select
            onChange={handleChange}
            name="score"
            value={fieldValues.score}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            리뷰
          </label>
          <textarea
            type="text"
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="content"
            value={fieldValues.content}
          />
        </div>

        <div className="mb-4">
          <button
            className="shadow border bg-blue-100 hover:bg-blue-300 border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
            onClick={handleSubmit}
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
