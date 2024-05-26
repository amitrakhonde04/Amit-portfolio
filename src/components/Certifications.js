import React from 'react';
// import './Certifications.css';

const certifications = [
  {
    title: "Python For Data Science And Machine Learning",
    issuer: "Udemy",
    date: "Jun 2022",
    link: "https://drive.google.com/file/d/14R30zJVCROOGrJ2W1Wc0t5063VEMt8AJ/view?usp=drivesdk"
  },
  {
    title: "Neural Network And Deep Learning",
    issuer: "Deeplearning.Ai",
    date: "september 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/ZSWNKMCPPLEF?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
  },
  
  {
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    date: "December 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/5MTBVE2YTT8C?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
  },
  {
    title: "AWS Cloud Practitioner Foundational",
    issuer: "AWS",
    date: "July 2023",
    link: "https://www.credly.com/badges/b74c854d-5428-4c56-a8ea-ea748e5972e4/linked_in_profile"
  }
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="certification" key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
            <a href={cert.link} className="certification-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
