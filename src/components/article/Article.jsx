import React, { useEffect, useState } from "react";

import Dashboard from "../../components/dashboard/Dashboard";

const Article = () => {
  return (
    <>
      <Dashboard />
      <section className="section main-section max-w-screen-xl mx-auto">
        <div className="notification blue">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0"></div>
        </div>
        <div className="card has-table">
          <header className="card-header justify-around mx-auto">
            <p className="card-header-title">
              <span className="icon">
                <i className="mdi mdi-account-multiple font-suwannaphum" />
              </span>
              Clients
            </p>
            <a href="#" className="card-header-icon">
              <span className="icon">
                <i className="mdi mdi-reload" />
              </span>
            </a>
          </header>
          <div className="flex justify-end p-4">
            <button className="button bg-blue-500 px-2 py-2 font-suwannaphum font-semibold text-white rounded-md">
              +New
            </button>
          </div>
          <div className="card-content">
            <table>
              <thead>
                <tr className="text-[23px] font-suwannaphum">
                  <th className="checkbox-cell">
                    {/* <label className="checkbox">
                <input type="checkbox" />
                <span className="check" />
              </label> */}
                  </th>
                  <th className="image-cell font-suwannaphum " />
                  <th>Name</th>
                  <th>Username</th>
                  <th>Progress</th>
                  <th>Created</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr className="font-suwannaphum text-1xl">
                  <td className="checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="check" />
                    </label>
                  </td>
                  <td className="image-cell">
                    <div className="image object-cover ">
                      <img
                        src="../src/assets/Profile_article.jpeg"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Rebecca Bauch</td>
                  <td data-label="Company">Daugherty-Daniel</td>
                  <td data-label="Progress" className="progress-cell">
                    <progress max={100} value={79}>
                      79
                    </progress>
                  </td>
                  <td data-label="Created">
                    <span
                      className="text-gray-500 text-1xl"
                      title="Oct 25, 2021"
                    >
                      Oct 25, 2021
                    </span>
                  </td>
                  <td className="actions-cell">
                    <div className="buttons right nowrap">
                      <button
                        className="button small blue --jb-modal"
                        data-target="sample-modal-2"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-eye" />
                        </span>
                      </button>
                      <button
                        className="button small red --jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-trash-can" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="font-suwannaphum text-1xl">
                  <td className="checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="check" />
                    </label>
                  </td>
                  <td className="image-cell">
                    <div className="image">
                      <img
                        src="../src/assets/Profile_article.jpeg"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Felicita Yundt</td>
                  <td data-label="Company">Johns-Weissnat</td>
                  <td data-label="Progress" className="progress-cell">
                    <progress max={100} value={67}>
                      67
                    </progress>
                  </td>
                  <td data-label="Created">
                    <span
                      className="text-gray-500 text-1xl"
                      title="Jan 8, 2021"
                    >
                      Jan 8, 2021
                    </span>
                  </td>
                  <td className="actions-cell">
                    <div className="buttons right nowrap">
                      <button
                        className="button small blue --jb-modal"
                        data-target="sample-modal-2"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-eye" />
                        </span>
                      </button>
                      <button
                        className="button small red --jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-trash-can" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="font-suwannaphum text-1xl">
                  <td className="checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="check" />
                    </label>
                  </td>
                  <td className="image-cell">
                    <div className="image">
                      <img
                        src="../src/assets/Profile_article.jpeg"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Mr. Larry Satterfield V</td>
                  <td data-label="Company">Hyatt Ltd</td>
                  <td data-label="Progress" className="progress-cell">
                    <progress max={100} value={16}>
                      16
                    </progress>
                  </td>
                  <td data-label="Created">
                    <span
                      className="text-gray-500 text-1xl"
                      title="Dec 18, 2021"
                    >
                      Dec 18, 2021
                    </span>
                  </td>
                  <td className="actions-cell">
                    <div className="buttons right nowrap">
                      <button
                        className="button small blue --jb-modal"
                        data-target="sample-modal-2"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-eye" />
                        </span>
                      </button>
                      <button
                        className="button small red --jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-trash-can" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="font-suwannaphum text-1xl">
                  <td className="checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="check" />
                    </label>
                  </td>
                  <td className="image-cell">
                    <div className="image">
                      <img
                        src="../src/assets/Profile_article.jpeg"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Mr. Broderick Kub</td>
                  <td data-label="Company">Kshlerin, Bauch and Ernser</td>
                  <td data-label="Progress" className="progress-cell">
                    <progress max={100} value={71}>
                      71
                    </progress>
                  </td>
                  <td data-label="Created">
                    <span
                      className="text-gray-500 text-1xl"
                      title="Sep 13, 2021"
                    >
                      Sep 13, 2021
                    </span>
                  </td>
                  <td className="actions-cell">
                    <div className="buttons right nowrap">
                      <button
                        className="button small blue --jb-modal"
                        data-target="sample-modal-2"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-eye" />
                        </span>
                      </button>
                      <button
                        className="button small red --jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-trash-can" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="font-suwannaphum text-1xl">
                  <td className="checkbox-cell">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="check" />
                    </label>
                  </td>
                  <td className="image-cell">
                    <div className="image">
                      <img
                        src="../src/assets/Profile_article.jpeg"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td data-label="Name">Barry Weber</td>
                  <td data-label="Company">
                    Schulist, Mosciski and Heidenreich
                  </td>
                  <td data-label="Progress" className="progress-cell">
                    <progress max={100} value={80}>
                      80
                    </progress>
                  </td>
                  <td data-label="Created">
                    <span
                      className="text-gray-500 text-1xl"
                      title="Jul 6, 2021"
                    >
                      Jul 6, 2021
                    </span>
                  </td>
                  <td className="actions-cell">
                    <div className="buttons right nowrap">
                      <button
                        className="button small blue --jb-modal"
                        data-target="sample-modal-2"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-eye" />
                        </span>
                      </button>
                      <button
                        className="button small red --jb-modal"
                        data-target="sample-modal"
                        type="button"
                      >
                        <span className="icon">
                          <i className="mdi mdi-trash-can" />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table-pagination">
              <div className="flex items-center justify-between">
                <div className="buttons space-x-2">
                  <button className="button">Previous</button>
                  <button className="button">Next</button>
                </div>
                <small>Page 1 of 3</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
