import { Button } from "@mui/material";

import { Container } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="wrapper__content">
          <h1 className="wrapper__content--title">
            Conquer habits and reach goals with Habit Ninja
          </h1>
          <p className="wrapper__content--text">
            Make and track goals to get motivated and stay on track with Habit Ninja.
          </p>
          <Button variant="contained">Start for free</Button>
        </div>
        <img className="wrapper__image" src="https://via.placeholder.com/400" />
      </div>
      <div className="wrapper">
        <img className="wrapper__image" src="https://via.placeholder.com/300" />
        <div className="wrapper__content">
          <h2 className="wrapper__content--subtitle">Stay motivated and reach goals.</h2>
          <p className="wrapper__content--text">
            With Habit Ninja, you can see your progress in vivid, colorful charts that keep you
            motivated to achieve your goals.
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper__content">
          <h2 className="wrapper__content--subtitle">Track habits and get organized.</h2>
          <p className="wrapper__content--text">
            Habits Ninja helps you organize your tasks and goals by creating habit trackers that
            show your progress at a glance.
          </p>
        </div>
        <img className="wrapper__image" src="https://via.placeholder.com/300" />
      </div>
      <div className="wrapper">
        <img className="wrapper__image" src="https://via.placeholder.com/300" />
        <div className="wrapper__content">
          <h2 className="wrapper__content--subtitle">
            Share your progress anywhere with embed links.
          </h2>
          <p className="wrapper__content--text">
            You can generate an embed link for your habit tracker and display it in Notion or other
            platforms to easily share your progress with others.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
