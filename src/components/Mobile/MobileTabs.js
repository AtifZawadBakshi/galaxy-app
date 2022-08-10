import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import S22Ultra from "./S22Ultra";
const MobileTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tab-slider-product section">
      <div className="container" style={{ maxWidth: "1800px" }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="section-header text-center">
              <h2 className="h2 heading-font font-weight-bold">Mobile</h2>
            </div>
            <div className="tabs-listing mt-5">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box>
                    <TabList
                      onChange={handleChange}
                      aria-label="visible arrows tabs example"
                      centered
                      textColor="inherit"
                      TabIndicatorProps={{
                        sx: {
                          bgcolor: "black",
                        },
                      }}
                    >
                      <Tab label="Galaxy S22 Ultra" value="1" />
                      <Tab label="Galaxy S22 Plus" value="2" />
                      <Tab label="Galaxy S21 FE 5G" value="3" />
                      <Tab label="Galaxy Z Flip3 5G" value="4" />
                      <Tab label="Galaxy Z Fold3 5G" value="5" />
                      <Tab label="Galaxy A52s 5G" value="6" />
                      <Tab label="Galaxy Tab S6 Lite" value="7" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <S22Ultra />
                  </TabPanel>
                  <TabPanel value="2">
                    Galaxy S22 Plus
                    <img
                      style={{ height: "1180px" }}
                      src="assets\images\ThisMonthsPick\School-_-Home.jpg"
                      className="figure-img img-fluid rounded"
                      alt="banner"
                    />
                  </TabPanel>
                  <TabPanel value="3">
                    Galaxy S21 FE 5G
                    <img
                      style={{ height: "1180px" }}
                      src="assets\images\ThisMonthsPick\School-_-Home.jpg"
                      className="figure-img img-fluid rounded"
                      alt="banner"
                    />
                  </TabPanel>
                  <TabPanel value="4">Galaxy Z Flip3 5G</TabPanel>
                  <TabPanel value="5">Galaxy Z Fold3 5G</TabPanel>
                  <TabPanel value="6">Galaxy A52s 5G</TabPanel>
                  <TabPanel value="7">Galaxy Tab S6 Lite</TabPanel>
                </TabContext>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTabs;
