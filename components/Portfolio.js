import Card from "./Ui/Card";
import Styles from "./Skills.module.scss";
export default function Portfolio() {
  return (
    <div id="Portfolio">
      <span className=" text-center justify-center flex my-24 text-gray-600">
        - - - - - - - - - - - - - - - - - - - - - -
      </span>
      <div className="sm:flex max-w-sm m-auto md:max-w-5xl  content-center">
        <div className=" mt-10">
          <div className="md:flex">
            <p className=" text-gray-700  text-xl font-medium mt-6 mr-5">
              &lt;h1&gt;
            </p>

            <div id="app">
              <div id="wrapper">
                <h1
                  className={Styles.glitch}
                  data-text="
                  Portfolio"
                >
                  Portfolio
                </h1>
              </div>
            </div>
            <p className=" text-gray-700  text-xl font-medium mt-6">
              &lt;/h1&gt;
            </p>
          </div>

          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;/p&gt;</p>
          <p className=" text-gray-300 font-medium  mx-14 my-3 sm:mx-0">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor.
          </p>
          <p className=" text-gray-700 ml-10 text-xl font-medium">&lt;p&gt;</p>
        </div>
      </div>
      <div className=" mt-20 ">
        <div className="grid lg:grid-cols-2 gap-y-28 m-auto content-center justify-center gap-x-14">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="sm:flex grid pt-12 gap-6 m-auto lg:max-w-5xl max-w-sm justify-center content-center">
          <div className="sm:flex  content-center justify-center my-auto">
            <p className=" text-gray-700  text-xl font-medium mr-4">
              &lt;/p&gt;
            </p>
            <p className=" text-gray-300 font-medium  mx-14 sm:mx-0">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor.
            </p>
            <p className=" text-gray-700 ml-4 text-xl font-medium">&lt;p&gt;</p>
          </div>
          <button className="bg-[#131516] rounded-xl border-2 border-[#2A2D31] shadow-2xl text-white px-5 py-3">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}