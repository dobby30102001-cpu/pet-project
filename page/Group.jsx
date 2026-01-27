import { useState, useEffect } from "react"
import GroupCommon from "../components/GroupCommon";
import axios from "axios";

const listGroups = {
    "title": 'List Groups',
    "items": [
        {
            groupName: 'Java Fresher',
            member: '18',
            type: 'Employee',
            creator: 'Vu Dinh Hao',
            createDate: '19-05-2018'
        },
        {
            groupName: 'PHP Fresher',
            member: '9',
            type: 'Employee',
            creator: 'Nguyen Thi Giang',
            createDate: '19-05-2017'
        },
        {
            groupName: 'Ruby Fresher',
            member: '8',
            type: 'Employee',
            creator: 'Vu Dinh Hao',
            createDate: '19-05-2016'
        },
        {
            groupName: 'Team Lead',
            member: '10',
            type: 'PM',
            creator: 'Vu Dinh Hao',
            createDate: '19-05-2018'
        }
    ]
}

export default function Group() {
    const [input, setInput] = useState('');
    const [groups, setGroups] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://6961f5f2d9d64c761906945c.mockapi.io/test/`).then((result) => {
            console.log('result', result)
            if (result.status === 200) {
                setGroups(result.data);
                setData(result.data);
            }
        })
    }, [])

    const handleInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    }

    const handleSearch = () => {
        if (input.trim()) {
            const search = groups.filter((i) => i.groupName.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

            setGroups(search);
        } else {
            setGroups(data);
        }
    }

    const handleDelete = (index) => {
        const newGroups = [...groups];

        newGroups.splice(index, 1);

        setGroups(newGroups);
    }

    return (
        <GroupCommon input={input} items={groups} handleInput={handleInput} handleSearch={handleSearch} handleDelete={handleDelete} />
    )

};
