import React from "react";
import "./Clinics.css";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import clinic from "../../Asset/wetransfer_01-jpg_2023-09-22_1220/Clinic.jpg";
import Footer from "../../components/Footer/Footer";

const Clinics = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img className="visionimage" src={clinic} alt="AboutImage" />
        <div className="AboutClinics">
          <h2>OUR SERVICES & CLINICS</h2>
          <p>
            The hospital is offering best healthcare services including fully
            functional emergency units separate for male and female patients,
            technologically advanced laboratories, ultrasound, a pharmacy and
            specialized as well as General Medicine clinics and all that is
            required by standards.
          </p>
          <h2>EYE CLINIC</h2>
          <p>
            At our state-of-the-art Eye Clinic, we are committed to providing
            comprehensive eye care services o patients of all ages. Your vision
            is our top priority, and our team of highly specialized doctors is
            dedicated to ensuring your eye health and visual acuity.
          </p>
          <h2>GYNAE CLINIC </h2>
          <p>
            We are dedicated to providing comprehensive and compassionate care
            for women of all ages. Our clinic is designed to be a safe and
            supportive space where women can address their unique health
            concerns and receive personalized medical care.
          </p>
          <h2>DIABETIC CLINIC </h2>
          <p>
            We are staffed with a team of skilled healthcare professionals
            including endocrinologist who works efficiently to offer
            comprehensive care to the patients. We focus on providing
            personalized treatment plans tailored to each individual’s unique
            needs, ensuring a holistic to diabetes management.
          </p>
          <h2>ORTHOPEDIC CLINIC </h2>
          <p>
            We offer a wide range of services to patients of all ages,
            addressing a variety of musculoskeletal conditions and injuries.
          </p>
          <h2>GASTROENTEROLOGY CLINIC </h2>
          <p>
            Our clinic boats state-of-the-art facilities and the latest medical
            technologies, allowing us to perform advanced diagnostic procedures
            and treatments with precision and accuracy. We prioritize patient
            comfort and safety throughout every step of the process.
          </p>
          <h2>DERMATOLOGY CLINIC</h2>
          <p>
            Our dermatology clinic offers comprehensive facility to deal with
            diseases related to skin, hair, and nails. Treatment is provided by
            the expert dermatologist and specialized staff.
          </p>
          <h2>PEDIATRIC CLINIC</h2>
          <p>
            Pediatric clinic is designed to cure the diseases specifically
            related to new born babies and adolescents, a sensitive approach is
            required for which we offer specialized pediatric facilities with
            expert doctors, who assess the physical, mental and behavioral
            development of the children.
          </p>
          <h2>ENT CLINIC </h2>
          <p>
            Our ENT clinic is designed to deal with disorders related to ear,
            nose and throat. The Ear, Nose & Throat specialist deals with major
            issues like, hearing, balancing, swallowing, speech, and other sort
            of issues.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clinics;
