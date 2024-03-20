import React from "react";

interface Card {
  id: number;
  name: string;
  email: string;
}

export const Card: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className=" bg-white rounded-lg shadow-lg p-2 mb-2 hover:bg-gray-200">
      <div className="text-sm text-gray-600">ID: {card.id}</div>
      <div className="text-lg font-semibold text-gray-800">{card.name}</div>
      <div className="text-md text-gray-700">{card.email}</div>
    </div>
  );
};
