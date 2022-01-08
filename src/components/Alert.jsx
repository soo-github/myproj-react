// https://tailwind-elements.com/docs/standard/components/alerts/ 에서 icons참고

import Check from './icons/Check';
import Info from './icons/Info';
import Ex from './icons/Ex';

const MAPPING = {
  info: ['blue', <Info />],
  success: ['green', <Check />],
  danger: ['red', <Ex />],
};

function Alert({ type, message }) {
  // TODO: 매핑 오류에 대한 대응
  // TODO: 동적 colorCode와 tailwind
  const [colorCode, icon] = MAPPING[type];

  return (
    <div
      className={`bg-${colorCode}-100 rounded-lg py-5 px-6 mb-3 text-base text-${colorCode}-700 inline-flex items-center w-full`}
      role="alert"
    >
      <span className="mr-2">{icon}</span>
      {message}
    </div>
  );
}

function Cheat() {
  return (
    <div className="bg-blue-100 text-blue-700 bg-green-100 text-green-700 bg-red-100 text-red-700" />
  );
}

export default Alert;
