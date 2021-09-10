import type { NextPage } from "next";
import { Button } from "../src/shared/ui/button";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button color={undefined}>Click me!</Button>
    </div>
  );
};

export default Home;
