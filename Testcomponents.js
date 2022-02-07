import React,{ useEffect , useState } from "react";
import axios from "axios";
import './StudentForm.css'

export default function Testcomponents(){
    const [TableData, setTableData] = useState([]);

    useEffect( () => {
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then((res) => {
                    console.log("response", res);
                    setTableData(res.data);
                })
                .catch((err) => {
                    console.log("err", err);


                });
        },[]);
        return(
            
                <table>
                    <thead>
                    <tr id="log">
                        <th>id</th> <th>tittle</th> <th>body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {TableData.map((v) => {
                        return(
                            <tr id="box">
                                <th>{v.id}</th>
                                <th>{v.tittle}</th>
                                <th>{v.body}</th>
                            </tr>

                        );
                    })

                    }
                    </tbody>
                </table>
            
        );





    }