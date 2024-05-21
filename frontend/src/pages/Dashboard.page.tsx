import Header from "../components/Header"
import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "../components/financial-record-form";
import { FinancialRecordList } from "../components/financial-record-list";
import "../components/financial-record.css";
import { useFinancialRecords } from "../contexts/financial-record-context";
import { useMemo } from "react";

const Dashboard = () => {
    const { user } = useUser();
    const { records } = useFinancialRecords();
  
    const totalMonthly = useMemo(() => {
      let totalAmount = 0;
      records.forEach((record) => {
        totalAmount += record.amount;
      });
  
      return totalAmount;
    }, [records]);
    return (
        <div>
            <Header/>
            <div className="w-[1300px] mx-auto mt-10">
      <h1 className="font-mono font-black text-2xl"> Welcome {user?.firstName}! Here Are Your Finances:</h1>
      <FinancialRecordForm />
      <div>Total Monthly: ${totalMonthly}</div>
      <FinancialRecordList />
    </div>
        </div>
    )
}

export default Dashboard