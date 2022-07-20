import image from "/Users/hhajm/Desktop/dojo-blog/src/images/flower 1.jpg";
import { TbBusinessplan } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";

function Admission1() {
  return (
    <div className="admissionForm">
      <div className="step1">
        <div className="progressBar">
          <div className="step1Text">
            <h3>Enrollment Form</h3>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "33.3%" }}
              aria-valuenow="33.3"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="step1Text2">
            <h5>Step 1 of 3 - Select Programs</h5>
          </div>
        </div>
        <div className="selectPrograms">
          <div className="findPrograms">
            <div className="filter">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <TbBusinessplan size={30} />
                  <span className="filterNames">Business</span>
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <GiMaterialsScience size={30} />
                  <span className="filterNames">Math & Science</span>
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <MdOutlineWeb size={30} />
                  <span className="filterNames">Web Development</span>
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <IoGameController size={30} />
                  <span className="filterNames">Game Development</span>
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <MdOutlineDesignServices size={30} />
                  <span className="filterNames">Design</span>
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <BiCodeBlock size={30} />
                  <span className="filterNames">Programming</span>
                </label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <GiArtificialIntelligence size={30} />
                  <span className="filterNames">A.I.</span>
                </label>
              </div>
            </div>
            <div className="programs">
              <div className="programBoxes">
                <div className="Design card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">2D Design</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <MdOutlineDesignServices size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="Design card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">3D Design</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <MdOutlineDesignServices size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="MathSc card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Applied Sciences</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <GiMaterialsScience size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="BusMark card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Business and Marketing</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <TbBusinessplan size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="BusMark card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Communications</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <TbBusinessplan size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="coding card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">C++ & OOP</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <BiCodeBlock size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="coding card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">C#</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <BiCodeBlock size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="AI card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Deep Learning</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <GiArtificialIntelligence size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="webdev card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">HTML & CSS & JS</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <MdOutlineWeb size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="AI card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Machine Learning</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <GiArtificialIntelligence size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="MathSc card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Mathematics</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <GiMaterialsScience size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="MathSc card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Physics</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <GiMaterialsScience size={30} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="webdev card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">React Development</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <MdOutlineWeb size={30} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="gamedev card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Unity</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <IoGameController size={30} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="gamedev card">
                  <img src={image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">Unreal Engine</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="btnLegend">
                      <a
                        href="/Admission1"
                        className="btn btn-primary"
                        style={{ width: "200px" }}
                      >
                        Select
                      </a>
                      <span className="courseIcon">
                        <IoGameController size={30} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nextPrevStep">
                <a
                  class="prevBtn btn btn-outline-primary disabled"
                  role="button"
                  aria-disabled="true"
                >
                  Previous Step
                </a>
                <a
                  class="nextBtn btn btn-outline-primary"
                  href="/Admission2"
                  role="button"
                >
                  Next Step
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admission1;
