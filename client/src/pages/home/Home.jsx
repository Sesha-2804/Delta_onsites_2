import React from "react";
import { useEffect } from "react";
import './home.css'
import axios from "axios";
import { useState } from "react";

export default function Home() {
    const [user, setUser] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res=await axios.get("/auth/homeStudent", {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                console.log(res)
                setUser(res.data)

            } catch (err) {
                console.log(err);
            }
        }
        fetchUser()
    }, [])
    return (
        <div className="homeContainer">
            <div className="homeWrapper">
                <center>
                    <h1 className="studhead">Student Attendance</h1>
                </center>

                <div className="sessionCont">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>{user.username}</td>
                                <td>Design</td>
                                <td>19-08-22</td>
                                <td>4:00PM</td>
                                <td><button>Mark</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}