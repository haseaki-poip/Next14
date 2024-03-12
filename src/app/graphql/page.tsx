import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { cache } from "react";

// Thirdパーティなどを使用した通信部分の関数をcacheで囲み、revalidateの時間をせっていするとISRとなる
// revalidateを0にするとSSRの動作となる
// revalidateを記述しない、もしくはそもそもcacheで囲まないとSSGとなる
export const revalidate = 10;

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!,
  cache: new InMemoryCache(),
});

const DOGS = gql`
  query Dogs {
    dogs {
      description
      id
      name
      thumbnail {
        url
      }
    }
  }
`;
const getDogDatas = cache(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("graph");
  const { data } = await client.query({
    query: DOGS,
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
