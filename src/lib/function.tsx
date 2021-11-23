import dayjs from "dayjs";
import { db } from "src/lib/firebase";

// メールデータの取得（全件）
export const fetchMailData = async () => {
  const res = await db.collection("amidakuji").orderBy("createAt").get();
  const result = res.docs.map((doc) => {
    const DATE = dayjs(doc.data().createAt.toDate());
    return {
      id: doc.id,
      count: doc.data().count,
      url: doc.data().url,
      player1: doc.data().player1,
      player2: doc.data().player2,
      player3: doc.data().player3,
      player4: doc.data().player4,
      player5: doc.data().player5,
      player6: doc.data().player6,
      player7: doc.data().player7,
      player8: doc.data().player8,
      player9: doc.data().player9,
      createAt: DATE.format("YYYY-MM-DD HH:mm:ss"),
    };
  });
  return result;
};

// メールデータの削除（props=id）
export const deleteMailData = async (id: string) => {
  try {
    await db.collection("amidakuji").doc(id).delete();
  } catch (err) {
    console.log("Error delete document:", err);
  }
};
