import { useState, useEffect } from "react";
import { fetchMailData, deleteMailData } from "src/lib/function";

export interface RESULT {
  id: string;
  count: string;
  url: string;
  player1: string;
  player2: string;
  player3: string;
  player4: string;
  player5: string;
  player6: string;
  player7: string;
  player8: string;
  player9: string;
  createAt: string;
}

export const TableMail = () => {
  const initData: RESULT[] = [];
  const [mailData, setMailData] = useState(initData);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMailData();
      setMailData(result);
    };
    fetchData();
  }, []);
  const handleOnClick = (id: string, index: number) => {
    deleteMailData(id);
    const newMailData = [...mailData];
    newMailData.splice(index, 1);
    setMailData(newMailData);
  };
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th></th>
          <th>No</th>
          <th>作成日</th>
          <th>count</th>
          <th>url</th>
          <th>Player1</th>
          <th>Player2</th>
          <th>Player3</th>
          <th>Player4</th>
          <th>Player5</th>
          <th>Player6</th>
          <th>Player7</th>
          <th>Player8</th>
          <th>Player9</th>
        </tr>
      </thead>
      <tbody>
        {mailData.map((mail, index) => {
          return (
            <tr key={index + 1}>
              <td>
                <button
                  className="p-4 bg-primary hover:bg-secondary text-white font-bold text-xs focus:outline-none rounded-lg"
                  onClick={() => handleOnClick(mail.id, index)}
                >
                  削除
                </button>
              </td>
              <td className="text-center">{index + 1}</td>
              <td>{mail.createAt}</td>
              <td>{mail.count}</td>
              <td>{mail.url}</td>
              <td>{mail.player1}</td>
              <td>{mail.player2}</td>
              <td>{mail.player3}</td>
              <td>{mail.player4}</td>
              <td>{mail.player5}</td>
              <td>{mail.player6}</td>
              <td>{mail.player7}</td>
              <td>{mail.player8}</td>
              <td>{mail.player9}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
