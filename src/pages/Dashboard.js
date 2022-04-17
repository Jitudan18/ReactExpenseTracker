import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Expenses from "../pages/Expenses";
import PerBill from "../pages/PerBill";
import Signin from "../components/Signin";
import MyDashboard from "../pages/MyDashboard";
import Report from "../pages/Report";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Prof from "../pages/Prof";
import LogOut from "../pages/LogOut";
import ExpenseList from "../pages/ExpenseList";
import '../_css/Dashboard.css'
import { VendorSingup } from "../Login/VendorSingup";
import { AddRole } from "../Role/AddRole";
import { GetRole } from "../Role/GetRole";
import { UpdateRole } from "../Role/UpdateRole";
import { GetUsers } from "../User/GetUsers";
import { Adduser } from "../User/Adduser";
import { User_details } from "../User/User_details";
import { Updateuser } from "../User/Updateuser";
import { AddVendor } from "../Vendor/AddVendor";
import { GetVendor } from "../Vendor/GetVendor";
import { UpdateVendor } from "../Vendor/UpdateVendor";
import { VendorRequest } from "../Vendor/VendorRequest";
import { AddCategory } from "../Category/AddCategory";
import { GetCategory } from "../Category/GetCategory";
import { UpdateCategory } from "../Category/UpdateCategory";
import { AddSubCategory } from "../SubCategory/AddSubCategory";
import { GetSubCategory } from "../SubCategory/GetSubCategory";
import { UpdateSubCategory } from "../SubCategory/UpdateSubCategory";




export const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">

           <Routes>
             <Route path='/' element={<MyDashboard/>}></Route>
			 <Route path= '/Report' element={<Report/>}></Route>
			 <Route path="/Expenses" element={<Expenses/>}></Route>
			 <Route path="/PerBill" element={<PerBill/>}></Route>
			 <Route path="/About" element={<About/>}></Route>
			 <Route path="/Contact" element={<Contact/>}></Route>
       <Route path="/ExpenseList" element={<ExpenseList/>}></Route>
       
       <Route path="vendorsingup" element={<VendorSingup />}></Route>
       <Route path="addrole" element={<AddRole />}></Route>
        <Route path="getrole" element={<GetRole />}></Route>
        <Route path="getrole/updaterole/:id" element={<UpdateRole />}></Route>
        <Route path='user/adduser' element={<Adduser/>}></Route>
        <Route path='adduser' element={<Adduser/>}></Route>
        <Route path="user" element={<GetUsers />}></Route>
        <Route path="user/userdetails" element={<User_details />}></Route>
        <Route path="user/updateuser/:userId" element={<Updateuser />}></Route>
        <Route path="addvendor" element={<AddVendor />}></Route>
        <Route path="getvendor" element={<GetVendor />}></Route>
        <Route
          path="getvendor/updatevendor/:id"
          element={<UpdateVendor />}
        ></Route>
        <Route path="vendorrequest" element={<VendorRequest />}></Route>
        <Route path="addcategories" element={<AddCategory />}></Route>
        <Route path="/categorylist" element={<GetCategory />}></Route>
        <Route
          path="categorylist/updatecategory/:categoryId"
          element={<UpdateCategory />}
        ></Route>
        <Route path="addsubcategory" element={<AddSubCategory />}></Route>
        <Route path="getsubcategory" element={<GetSubCategory />}></Route>
        <Route
          path="getsubcategory/updatecategory/:id"
          element={<UpdateSubCategory />} ></Route>

	

			 {/* User account */}

			 <Route path="/Prof" element={<Prof/>}></Route>
       <Route path="/Signin" element={<Signin/>}></Route>
			 <Route path="/LogOut" element={<LogOut/>}></Route>
           </Routes>


          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
