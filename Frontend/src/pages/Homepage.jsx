import React from "react";
import { useSelector } from "react-redux";
import "../css/homepage.css";

const Homepage = () => {
  const details = useSelector((state) => state.details.details);

  return (
    <>
      <div className="container mt-3">
        <div className="table-responsive">
          <table className="table table-striped-columns table-bordered equal-table">
            <thead>
              <tr>
                <th className="text-center">SN</th>
                <th className="text-center">Company Name</th>
                <th className="text-center">Partnered For</th>
                <th className="text-center">Partnered In</th>
                <th className="text-center">Contact Info</th>
                <th className="text-center">Email</th>
                <th className="text-center">Social Media link</th>
              </tr>
            </thead>
            <tbody>
              {details.map((item, index) => (
                <tr key={index}>
                  <td data-label="SN" className="text-center">{index + 1}</td>
                  <td data-label="Company Name" className="text-center">{item.companyname}</td>
                  <td data-label="Partnered For" className="text-center">{item.partneredfor}</td>
                  <td data-label="Partnered In" className="text-center">{item.partneredin}</td>
                  <td data-label="Contact Info" className="text-center">{item.contactinfo}</td>
                  <td data-label="Email" className="text-center">{item.email}</td>
                  <td data-label="Social Media" className="text-center">
                    <a
                      href={item.socials}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Homepage;
