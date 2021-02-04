import React from "react";
import { Tabs, Tab, AppBar, Divider, Paper } from "@material-ui/core";
import MyTasks from "../../ms/components/MyTasks";
import MyTeamTasks from "../../ms/components/MyTeamTasks";
//import '../styles/home.css';
import "../../ms/styles/AccountOnboarding.css";
import Grid from "@material-ui/core/Grid";

import RMTagging from "./accountOnboarding/RMTagging";
import KYCWriteup from "./accountOnboarding/KYCWriteup";
import RiskAssessment from "./accountOnboarding/RiskAssessment";
import DocumentUpload from "./accountOnboarding/DocumentUpload";
import SubmitAccountOnboarding from "./accountOnboarding/SubmitAccountOnboarding";

const AccountOnboarding = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    1: "rmTagging",
    2: "kycWriteup",
    3: "riskAssessment",
    4: "documentUpload",
    5: "submit",
  };

  const indexToTabName = {
    rmTagging: 1,
    kycWriteup: 2,
    riskAssessment: 3,
    documentUpload: 4,
    submit: 5,
  };

  const [selectedTab, setSelectedTab] = React.useState(1);

  const handleChange = (newValue) => {
    //alert(newValue);
    console.log(newValue);
    //history.push(`/accountOnboarding/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  const toggleTab = (newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Tabs value={selectedTab} onChange={handleChange}>
              <Tab label="RM Tagging" />
              <Tab label="KYC Writeup" />
              <Tab label="Risk Assessment" />
              <Tab label="Document Upload" />
              <Tab label="Submit" />
            </Tabs>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          {selectedTab === 0 && <RMTagging />}
          {selectedTab === 1 && <KYCWriteup />}
          {selectedTab === 2 && <RiskAssessment />}
          {selectedTab === 3 && <DocumentUpload />}
          {selectedTab === 4 && <SubmitAccountOnboarding />}
        </Grid>

        <Grid item xs={12}>
          <div className="container">
            <div className="bloc-tabs">
              <button
                className={selectedTab === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                RM Tagging
              </button>
              <button
                className={selectedTab === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                KYC Writeup
              </button>
              <button
                className={selectedTab === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Risk Assessment
              </button>
              <button
                className={selectedTab === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                Document Upload
              </button>
              <button
                className={selectedTab === 5 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(5)}
              >
                Submit
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  selectedTab === 1 ? "content  active-content" : "content"
                }
              >
                <RMTagging />
              </div>

              <div
                className={
                  selectedTab === 2 ? "content  active-content" : "content"
                }
              >
                <KYCWriteup />
              </div>

              <div
                className={
                  selectedTab === 3 ? "content  active-content" : "content"
                }
              >
                <RiskAssessment />
              </div>
              <div
                className={
                  selectedTab === 4 ? "content  active-content" : "content"
                }
              >
                <DocumentUpload />
              </div>
              <div
                className={
                  selectedTab === 5 ? "content  active-content" : "content"
                }
              >
                <SubmitAccountOnboarding />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountOnboarding;