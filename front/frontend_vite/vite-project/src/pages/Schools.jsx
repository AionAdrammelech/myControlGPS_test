import { useEffect, useState } from "react";
import { getAllSchools } from "../services/dbqueryServices/schoolService";
import Leaflet from "../components/Leaflet";


function Schools() {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const data = await getAllSchools();
                setSchools(data);
                console.log(data);
            } catch (error) {
                console.error("Error al obtener escuelas ", error);
            }
        };
        fetchSchools();
    }, []);

    return (
        <>
            <p>SCHOOLS</p>
            <Leaflet escuelas={schools} centro={{ lat: 13.9942, lng: -89.5597 }}></Leaflet>
            {schools.map((school) => (
                <p key={school.id}>{school.nombre}</p>
            ))}
        </>
    );
}

export default Schools;