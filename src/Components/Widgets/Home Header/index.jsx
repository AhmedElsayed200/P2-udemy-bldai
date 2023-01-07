import clockImg from "../../../Resources/images/clock.jpg";

const HomeHeader = () => {
  return (
    <header className="header">
      <div className="header-txt">
        <h1 className="catch-txt">New to Udemy? Lucky you.</h1>
        <p className="content-txt">
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </p>
      </div>
      <div className="header-img-container">
        <div className="header-img">
          <img src={clockImg} alt="time to start" />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
