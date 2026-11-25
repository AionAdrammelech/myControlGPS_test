import { useEffect, useState } from "react";
import { getAllStudents } from "../services/dbqueryServices/studentService";
import Leaflet from "../components/Leaflet";

function Students(){
    const [students, setStudents] = useState([]);
        useEffect(() => {
            const fetchStudents = async () => {
            try {
                const data = await getAllStudents();
                setStudents(data);
                console.log(data);
            } catch (error) {
                console.error("error al obtener estiantes:", error);
            }
            };
            fetchStudents();
        }, []);
    
    return (
        <>
            <p>STUDENTS</p>
            <Leaflet estudiantes={students} centro={{ lat: 13.9942, lng: -89.5597 }}></Leaflet>
            {students.map((student) => (
                <p key={student.id}>{student.nombre}</p>
            ))}
        </>
    );
}
export default Students;