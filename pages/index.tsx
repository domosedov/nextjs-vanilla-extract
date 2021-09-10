import type { NextPage } from "next";
import { Button } from "../src/shared/ui/button";
import { themeRose } from "../src/styles/app.css";
import { atoms } from "../src/styles/sprinkles.css";

const Home: NextPage = () => {
  return (
    <div className={themeRose}>
      <h1>Home page</h1>
      <Button color={"primary"}>Click me!</Button>
      <div
        className={atoms({
          padding: {
            mobile: "none",
            tablet: "medium",
            desktop: "large",
          },
        })}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus minus
        fugit qui laborum officia. Tempore velit quo debitis exercitationem in
        placeat unde aspernatur saepe rem eligendi praesentium, provident
        molestias quisquam? Explicabo dolorem officiis rem quibusdam ut qui
        dolores repudiandae. Maxime.
      </div>
    </div>
  );
};

export default Home;
