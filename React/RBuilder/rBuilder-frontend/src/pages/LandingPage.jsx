import { Button } from "@mui/material";
import "./LandingPage.css";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <section id="bg1">
        <div className="row pt-5">
          <div className="col-4 "></div>
          <div className="col-4 box py-5 border text-center">
            <h3>Designed to get hired</h3>
            <h4>Your skills , Your Story , Your next job -- all in one.</h4>
            <Button
              sx={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
              variant="Contained"
            >
              Make Your Resume
            </Button>
          </div>
          <div className="col-4"></div>
        </div>
      </section>

      <section>
        <h3 className="text-center mt-4">Tools</h3>
        <div className="row">
          <div className="col-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily Write Profesional cover letters</p>
            <h4>Jobs</h4>
            <p>Automaticaly receive new and relevant jobpostings</p>
            <h4>Applications</h4>
            <p>
              Effortlessly manage and track Your job applications in an
              organiseed manner
            </p>
          </div>
          <div className="col-6">
            <img
              height={"300px"}
              width={"500px"}
              src="https://www.resumeground.com/images/resume.webp"
              alt="no image"
            />
          </div>
        </div>
      </section>

      <section id="bg1"></section>

      <section>
        <h1 className="text-center">Testimony</h1>
        <div className="row p-5">
          <div className="col-6">
            <h4>Trusted by professionals worldwide.</h4>
            <p>
              At LiveCareer, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>
            <p>
              In fact, users who used LiveCareer reported getting hired an
              average of 48 days faster. Join thousands of job-seekers who’ve
              fast-tracked their careers with a résumé that truly stands out.
            </p>
          </div>
          <div className="col-6">
            <div className="row  ">
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
            </div>

            <div className="row my-3">
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
              <div className="col-3">
                <img
                  src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"
                  alt="no image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
