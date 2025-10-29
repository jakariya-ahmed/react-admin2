const StatusBadge = ({ status  }) => {
  let style = "";

  switch (status) {
    case "completed":
      style = "border-green-600 text-green-700 bg-green-50";
      break;
    case "pending":
      style = "border-yellow-500 text-yellow-700 bg-yellow-50";
      break;
    case "canceled":
      style = "border-red-600 text-red-700 bg-red-50";
      break;
    case "delivered":
      style = "border-blue-600 text-blue-700 bg-blue-50";
      break;
    default:
      style = "border-gray-300 text-gray-600 bg-gray-50";
  }

  return (
    <span
      className={`inline-block border py-1 px-3 rounded-md text-[12px] font-medium capitalize ${style}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
