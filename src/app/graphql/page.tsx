import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { cache } from "react";
import { DogsQuery, DogsDocument } from "@/generated/codegen";

// Thirdパーティなどを使用した通信部分の関数をcacheで囲み、revalidateの時間をせっていするとISRとなる
// revalidateを0にするとSSRの動作となる
// revalidateを記述しない、もしくはそもそもcacheで囲まないとSSGとなる
export const revalidate = 10;

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
  cache: new InMemoryCache(),
});

const getDogDatas = cache(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("graph");
  // 型にcodegenで自動で生成した型を指定
  const { data } = await client.query<DogsQuery>({
    // codegenによって生成したものを使用
    // そのままっ記述したクエリでも可能
    query: DogsDocument,
    fetchPolicy: "no-cache",
    // Graphqlでこれを指定しずにサーバーでデータを取得する処理を行うと、サーバでキャッシュが残ったままとなる
    // client側でGraphqlを叩く時はリロードすれば大丈夫そう？
  });
  console.log(data.dogs);

  return data.dogs;
});
const Graphql = async () => {
  const dogs = await getDogDatas();
  return (
    <div>
      <h1>GraphQLテスト</h1>
      <p>{dogs[0].name}</p>
    </div>
  );
};

export default Graphql;
