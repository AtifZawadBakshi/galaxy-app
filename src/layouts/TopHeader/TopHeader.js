import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  ArrowDropDown,
  LockReset,
  Logout,
  ManageAccounts,
  PermIdentity,
  Person,
  StarBorder,
  Toc,
} from "@mui/icons-material";
const TopHeader = () => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const openUser = Boolean(anchorElUser);
  const handleUserClick = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleUserClose = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className="top-header"
      style={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-5 col-lg-4">
            <p>
              <i className="anm anm-phone-s" /> +880 9678303030
            </p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
            <div className="text-center">
              <p className="top-header_middle-text">
                FAIR ELECTRONICS LIMITED | FAIR GROUP
              </p>
            </div>
          </div>
          <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
            <span className="user-menu d-block d-lg-none">
              <Button
                id="basic-button"
                aria-controls={openUser ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openUser ? "true" : undefined}
                onClick={handleUserClick}
              >
                <Person sx={{ color: "white" }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElUser}
                open={openUser}
                onClose={handleUserClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <span style={{ marginRight: "20px" }}>
                    <PermIdentity />
                  </span>
                  My Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span style={{ marginRight: "20px" }}>
                    <StarBorder />
                  </span>
                  Wishliists
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span style={{ marginRight: "20px" }}>
                    <Toc />
                  </span>
                  Orders
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span style={{ marginRight: "20px" }}>
                    <ManageAccounts />
                  </span>
                  Edit Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span style={{ marginRight: "20px" }}>
                    <LockReset />
                  </span>
                  Change Password
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <span style={{ marginRight: "20px" }}>
                    <Logout />
                  </span>
                  Logout
                </MenuItem>
              </Menu>
            </span>

            {loggedIn ? (
              <ul className="customer-links list-inline">
                <li>
                  <Link to="/compare">Compare(0)</Link>
                </li>
                <li>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ color: "white" }}
                  >
                    Atif Zawad Bakshi{" "}
                    <span>
                      <ArrowDropDown />
                    </span>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <span style={{ marginRight: "20px" }}>
                        <PermIdentity />
                      </span>
                      My Account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span style={{ marginRight: "20px" }}>
                        <StarBorder />
                      </span>
                      Wishliists
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span style={{ marginRight: "20px" }}>
                        <Toc />
                      </span>
                      Orders
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span style={{ marginRight: "20px" }}>
                        <ManageAccounts />
                      </span>
                      Edit Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span style={{ marginRight: "20px" }}>
                        <LockReset />
                      </span>
                      Change Password
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <span style={{ marginRight: "20px" }}>
                        <Logout />
                      </span>
                      Logout
                    </MenuItem>
                  </Menu>
                </li>
              </ul>
            ) : (
              <ul className="customer-links list-inline">
                <li>
                  <Link to="/compare">Compare(0)</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/register">Create Account</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
