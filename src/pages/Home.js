import { Carousel } from "react-bootstrap";
import "../style/home.css";

function Home() {
  const CarouselControlPrev = document.querySelectorAll(
    ".carousel-control-prev"
  );
  console.log(CarouselControlPrev);

  return (
    <div className="home ">
      <div className="home1">
        <div className="textcontent-1">
          <div className="titlebox1 ">
            <h1>From Zero To Hero</h1>
          </div>
          <div className="text1">
            <p>
              Sit ad officia est consequat pariatur aliqua deserunt. Ad et
              veniam non aliqua sunt. Incididunt anim consequat proident commodo
              ullamco cillum ea fugiat fugiat laboris. Non aliqua velit irure
              mollit pariatur mollit nisi labore amet. Amet adipisicing sit
              pariatur est esse. Id sint deserunt esse culpa commodo eiusmod
              velit cillum cillum ipsum. Labore sint proident reprehenderit
              cupidatat ex magna pariatur dolore ad sit irure.
            </p>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="textcontent-2">
          <div className="titlebox2">
            <h1>About Me</h1>
          </div>
          <div className="text2">
            <p>
              Quis minim irure amet qui irure est aliqua ex do laborum velit
              enim sint excepteur. Ullamco ea officia minim sint est esse cillum
              labore magna magna. Cillum est esse labore aliqua sint culpa
              consectetur dolore id velit non. Ex dolore labore consequat
              reprehenderit. Pariatur irure elit est non eiusmod quis aliquip
              ullamco laborum deserunt dolore tempor eu consequat. Qui labore
              labore adipisicing ad excepteur Lorem tempor et amet anim
              voluptate adipisicing.
            </p>
          </div>
        </div>
      </div>
      <div className="home3">
        <div className="textcontent-3">
          <div className="title-3">
            <h1>What Tools I Use</h1>
          </div>
          <div className="program-carousel">
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-image d-flex justify-content-center align-item-center w-500"
                  width={"375px"}
                  height={"375px"}
                  src={require("../assets/HTML.png")}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-image d-flex justify-content-center align-item-center w-800"
                  width={"375px"}
                  height={"375px"}
                  src={require("../assets/CSS.png")}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-image d-flex justify-content-center align-item-center w-800"
                  width={"375px"}
                  height={"375px"}
                  src={require("../assets/JS.png")}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-image d-flex justify-content-center align-item-center w-800"
                  width={"375px"}
                  height={"375px"}
                  src={require("../assets/React.png")}
                  alt=""
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="carousel-image d-flex justify-content-center align-item-center w-800"
                  width={"375px"}
                  height={"375px"}
                  src={require("../assets/Bootstrap.png")}
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="textcontent-4 ">
          <h1 className="w-100  d-flex justify-content-center align-item-center">
            My Project
          </h1>
          <div className="dummyPortofolio d-flex justify-content-center align-item-center mt-3">
            <img
              src={require("../assets/dummyProject.jpg")}
              width={"50%"}
              height={"80%"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
