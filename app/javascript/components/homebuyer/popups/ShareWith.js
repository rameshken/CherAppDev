import React from "react";
import "./ShareWith.css";
import imgJohn from "../../../../assets/images/homebuyer/images/john.png";
import searchIcon from "../../../../assets/images/homebuyer/images/searchicon.png";
export const ShareWith = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-6 dropdown-left">
            <div className="input-group-search">
              <div
                className="
                          input-box
                          d-flex
                          br-6
                          ml-2
                          mr-2
                          align-items-center
                          border
                        "
              >
                <img className="ml-2 search-img" src={searchIcon} />
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="search"
                />
              </div>
            </div>
            <div className="list-enclosure">
              <p className="search-alpha-txt ml-1 p-2 mb-0">My Groups</p>
              <div
                className="
                          list-contents
                          d-flex
                          justify-content-between
                          ml-2
                          mb-3
                        "
              >
                <div className="list-des d-flex">
                  <div className="list-profile">
                    <img src={imgJohn} alt />
                  </div>
                  <div className="list-name p-2 mt-1">
                    <p className="mb-0">Acre</p>
                  </div>
                </div>
                <div className="list-check p-2 mt-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div
                className="
                          list-contents
                          d-flex
                          justify-content-between
                          ml-2
                          mb-3
                        "
              >
                <div className="list-des d-flex">
                  <div className="list-profile">
                    <img src={imgJohn} alt />
                  </div>
                  <div className="list-name p-2 mt-1">
                    <p className="mb-0">Acre</p>
                  </div>
                </div>
                <div className="list-check p-2 mt-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div
                className="
                          list-contents
                          d-flex
                          justify-content-between
                          ml-2
                          mb-3
                        "
              >
                <div className="list-des d-flex">
                  <div className="list-profile">
                    <img src={imgJohn} alt />
                  </div>
                  <div className="list-name p-2 mt-1">
                    <p className="mb-0">Acre</p>
                  </div>
                </div>
                <div className="list-check p-2 mt-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div
                className="
                          list-contents
                          d-flex
                          justify-content-between
                          ml-2
                          mb-3
                        "
              >
                <div className="list-des d-flex">
                  <div className="list-profile">
                    <img src={imgJohn} alt />
                  </div>
                  <div className="list-name p-2 mt-1">
                    <p className="mb-0">Acre</p>
                  </div>
                </div>
                <div className="list-check p-2 mt-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="chat-head">
              <p className="chat-head-txt">Add to chat</p>
            </div>
            <div className="mb-3" style={{ paddingTop: "30%" }}>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label chat-head-txt"
              >
                Message
              </label>
              <input
                type="text"
                className="form-control text-input"
                id="textreview"
                aria-describedby="emailHelp"
                placeholder="Check out this house!"
                style={{ width: "60%", height: 143 }}
              />
            </div>
            <div className="chat-btns d-flex justify-content-around">
              <div className="done-btn">
                <a href>Share</a>
              </div>
              <div className="cancel-lnk pt-1">
                <a href="#">Cancel </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
