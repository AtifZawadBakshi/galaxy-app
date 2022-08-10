import React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
const Container = styled.div`
  input,
  button,
  select,
  textarea {
    background: transparent;
    border: none;
    transition: all 0.4s ease-out 0s;
    -webkit-transition: all 0.4s ease-out 0s;
    color: #424242;
  }
  margin: 20px;
`;

const ProductCategoryListSidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [value, setValue] = React.useState(null);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="sidebar_tags">
        <div className="sidebar_widget categories filter-widget">
          <div className="title">
            <h2>Categories: Smartphones</h2>
          </div>
          <Container style={{ background: "#eeee" }}>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Series" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>Galazy Z</ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>Galazy S</ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>Galazy Note</ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>Galazy A</ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>Galazy M</ListItemText>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText>Galazy F</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
          </Container>
        </div>
        <div className="sidebar_widget filterBox filter-widget">
          <div className="title">
            <h2>Shopping Option</h2>
          </div>
          <FormControl className="my-3">
            <FormLabel>PRICE</FormLabel>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleValueChange}
              className="container"
            >
              <FormControlLabel
                value="50000"
                control={<Radio />}
                label="0TK - 50000TK"
              />
              <FormControlLabel
                value="100000"
                control={<Radio />}
                label="50000TK - 100,000TK"
              />
              <FormControlLabel
                value="200000"
                control={<Radio />}
                label="100,000TK - 200,000TK"
              />
              <FormControlLabel
                value="300000"
                control={<Radio />}
                label="200,000TK - Above"
              />
            </RadioGroup>
          </FormControl>
          <div className="my-3">
            <h2 style={{ color: "#6c757d", fontSize: "1rem" }}>MEMORY</h2>
          </div>
          <div className="container">
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Up to 16GB" />
              <FormControlLabel control={<Checkbox />} label="32GB" />
              <FormControlLabel control={<Checkbox />} label="64GB" />
              <FormControlLabel control={<Checkbox />} label="32GB" />
              <FormControlLabel control={<Checkbox />} label="128GB" />
              <FormControlLabel control={<Checkbox />} label="256GB" />
              <FormControlLabel control={<Checkbox />} label="512GB" />
              <FormControlLabel control={<Checkbox />} label="1 TB" />
            </FormGroup>
          </div>
          <div className="my-3">
            <h2 style={{ color: "#6c757d", fontSize: "1rem" }}>COLOR</h2>
          </div>
          <div className="container">
            <div className="filter-color swacth-list clearfix">
              <span className="swacth-btn black" />
              <span className="swacth-btn white checked" />
              <span className="swacth-btn red" />
              <span className="swacth-btn blue" />
              <span className="swacth-btn pink" />
              <span className="swacth-btn gray" />
              <span className="swacth-btn green" />
              <span className="swacth-btn orange" />
              <span className="swacth-btn yellow" />
              <span className="swacth-btn blueviolet" />
              <span className="swacth-btn brown" />
              <span className="swacth-btn darkGoldenRod" />
              <span className="swacth-btn darkGreen" />
              <span className="swacth-btn darkRed" />
              <span className="swacth-btn dimGrey" />
              <span className="swacth-btn khaki" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategoryListSidebar;
