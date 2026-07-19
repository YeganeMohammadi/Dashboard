import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Course from "../Pages/Course";
import Students from "../Pages/Students";
import Payments from "../Pages/Payments";
import Instructors from "../Pages/Instructors";
import Admins from "../Pages/Admins";
import Login from "../Pages/Login";
import GetAllCourses from "../Pages/Course/GetAll";
import CreateCourse from "../Pages/Course/Create";
import UpdateCourse from "../Pages/Course/Update";
import GetAllStudents from "../Pages/Students/GetAll";
import UpdateStudent from "../Pages/Students/Update";
import GetAllInstructors from "../Pages/Instructors/GetAll";
import UpdateInstructor from "../Pages/Instructors/Update";
import GetAllPayments from "../Pages/Payments/GetAll";
import UpdatePayment from "../Pages/Payments/Update";
import CourseDetails from "../Pages/Course/Details";
import InstructorDetails from "../Pages/Instructors/Details";
import CreateInstructor from "../Pages/Instructors/Create";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "courses",
                element: <Course />,
                children: [
                    {
                        index: true,
                        element: <GetAllCourses />
                    },
                    {
                        path: 'create',
                        element: <CreateCourse />
                    },

                    {
                        path: 'update/:id',
                        element: <UpdateCourse />
                    },
                    {
                        path: 'details/:id',
                        element: <CourseDetails />
                    },
                ]
            },
            { path: "students", element: <Students />,
                children: [
                    {
                        index: true,
                        element: <GetAllStudents />
                    },
                    {
                        path: 'update/:id',
                        element: <UpdateStudent />
                    }
                ]
             },
            { path: "payments", element: <Payments />,
                children: [
                    {
                        index: true,
                        element: <GetAllPayments />
                    },
                    {
                        path: 'update/:id',
                        element: <UpdatePayment />
                    }
                ]
             },
            { path: "instructors", element: <Instructors />,
                children: [
                    {
                        index: true,
                        element: <GetAllInstructors />
                    },
                    {
                        path: 'create',
                        element: <CreateInstructor />
                    },
                    {
                        path: 'update/:id',
                        element: <UpdateInstructor />
                    },
                    {
                        path: 'details/:id',
                        element: <InstructorDetails />
                    }
                ]
             },
        ]
    }

])

export default router

