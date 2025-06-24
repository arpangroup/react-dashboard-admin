import PageTitle from "../../components/page_title/PageTitle";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";

export default function Dashboard() {
  return(
    <div className="main-content">
      <PageTitle title="TrustNFT Dashboard" />
      <div className="container-fluid">
        <Banner/>

        <div className="row">
          <Card title='Registered User'/>
          <Card title='Active Users'/>
          <Card title='Site Staff'/>
          <Card title='Total Deposits'/>
          <Card title='Total Withdraw'/>
          <Card title='Total Referral'/>
          <Card title='Total Send'/>
          <Card title='Total Investment'/>
          <Card title='Deposit Bonus'/>
          <Card title='Investment Bonus'/>
          <Card title='Total Ticket'/>
        </div>
      </div>
    </div>
  )
}