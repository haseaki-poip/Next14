`use server`;

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type FormState = {
  error: string;
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
    return { error: safeparsedComment.error.issues[0].message };
  }

  const userInfo = safeparsedComment.data;

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log(userInfo);

  //   revalidatePath("/");
  redirect("/");
};
