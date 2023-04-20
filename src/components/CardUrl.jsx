
const CardUrl = ({ item, pathURL, children }) => {

  const { nanoid, origin } = item;

  return (
    <>
      <div className="p-6 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-2"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {pathURL}
          {nanoid}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {origin}
        </p>
        <div className="flex space-x-2">
          {children}
        </div>
      </div>
    </>
  );
};

export default CardUrl;
