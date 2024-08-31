
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/GlobalStyles';
import { Grid } from './styles/StyledComponents';
import RefundReports from './components/RefundReports';
import RefundTrends from './components/RefundTrends';
import AffiliatePerformance from './components/AffiliatePerformance';
import RefundAnalytics from './components/RefundAnalytics';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <h1>Refund Reporting and Analytics</h1>
        <Grid>
          <RefundReports />
          <RefundTrends />
          <AffiliatePerformance />
          <RefundAnalytics />
        </Grid>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;