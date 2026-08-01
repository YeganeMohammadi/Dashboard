import React from 'react';
import FetchData from '../../Utils/FetchData';

export default function SearchResult({ expression }) {
    const [allData, setAllData] = useState({
        instructors: [],
        courses: [],
        students: []
    })


    useEffect(() => {
        (async () => {
            const [instructorsRes, coursesRes, studentsRes] = await Promise.all(
                [
                    FetchData("/instructors", { method: "GET" }),
                    FetchData("/courses", { method: "GET" }),
                    FetchData("/students", { method: "GET" })
                ]
            );
            setAllData({
                instructors: instructorsRes.success ? instructorsRes.data : [],
                courses: coursesRes.success ? coursesRes.data : [],
                students: studentsRes.success ? studentsRes.data : []
            })
        })();
    }, [])
    
    return (
    <></>
  );
}
