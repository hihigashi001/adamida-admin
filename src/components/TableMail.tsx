import { useState, useEffect } from "react";
import { fetchMailData, deleteMailData } from "src/lib/function";

export interface RESULT {
  id: string;
  title: string;
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
  pried1: string;
  pried2: string;
  pried3: string;
  pried4: string;
  pried5: string;
  pried6: string;
  pried7: string;
  pried8: string;
  pried9: string;
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
          <th>title</th>
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
          <th>pried1</th>
          <th>pried2</th>
          <th>pried3</th>
          <th>pried4</th>
          <th>pried5</th>
          <th>pried6</th>
          <th>pried7</th>
          <th>pried8</th>
          <th>pried9</th>
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
              <td>{mail.title}</td>
              <td>/user/{mail.url}</td>
              <td>{mail.player1}</td>
              <td>{mail.player2}</td>
              <td>{mail.player3}</td>
              <td>{mail.player4}</td>
              <td>{mail.player5}</td>
              <td>{mail.player6}</td>
              <td>{mail.player7}</td>
              <td>{mail.player8}</td>
              <td>{mail.player9}</td>
              <td>{mail.pried1}</td>
              <td>{mail.pried2}</td>
              <td>{mail.pried3}</td>
              <td>{mail.pried4}</td>
              <td>{mail.pried5}</td>
              <td>{mail.pried6}</td>
              <td>{mail.pried7}</td>
              <td>{mail.pried8}</td>
              <td>{mail.pried9}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
