`use server`;

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = {
  error: {
    [key: string]: string;
  };
};

const conversionKeyToItemName = (key: string) => {
  switch (key) {
    case "name":
      return "ユーザ名";
    case "age":
      return "年齢";
    case "message":
      return "一言メッセージ";
    default:
      return "項目";
  }
};

export const registerUserInfo = async (
  formState: FormState,
  formData: FormData
): Promise<FormState> => {
  const safeparsedComment = z
    .object({
      name: z.string().nonempty({ message: "名前は必須です" }),
      age: z.preprocess((val) => {
        // 文字列を数値に変換
        const parsed = parseInt(val as string, 10);
        // 数値がNaNでないことを確認し、そうでなければその値を返す
        return isNaN(parsed) ? undefined : parsed;
      }, z.number().nonnegative({ message: "0歳以上を入力してください" })),
      message: z.string().nonempty().max(30, {
        message: "メッセージは必須で、30文字以下である必要があります",
      }),
    })
    .safeParse({
      name: formData.get("name"),
      age: formData.get("age"),
      message: formData.get("message"),
    });

  if (!safeparsedComment.success) {
    const errorField = safeparsedComment.error.issues[0].path[0];
    const errorMessage = safeparsedComment.error.issues[0].message;

    const wholeErrorMessage = `${conversionKeyToItemName(
      errorField as string
    )}の入力に誤りがあります`;

    return {
      error: {
        whole: wholeErrorMessage,
        [errorField]: errorMessage,
      },
    };
  }

  const userInfo = safeparsedComment.data;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  //   revalidatePath("/");
  redirect("/");
};
