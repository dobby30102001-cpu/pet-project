import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";


export default function DetailUser() {

    const [data, setData] = useState({});
    const { userID } = useParams();
    useEffect(() => {
        axios.get(`https://696e13e5d7bacd2dd715a7ff.mockapi.io/test/${userID}`).then((row) => {
            console.log('row', row)
            if (row.status === 200) {
                setData(row.data);
            }
        })
    }, [userID]);
    return (
        <>
            <h2>Detail User</h2>
            <h2>Name: {data.name}</h2>
            <h2>Created At: {moment(data.createdAt).format('YYYY-MM-DD HH:mm:ss')}</h2>

        </>
    );
}


