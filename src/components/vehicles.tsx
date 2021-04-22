import { useQuery } from "react-query";
import { getVehicles } from "../utils/api";

import Loader from "../common/loader";

type Vehicle = {
    name: string,
    model: string,
    passengers: string,
    cargo_capacity: string
}

type ResponseData = {
    results: Vehicle[],
}

const Vehicles = (props: any) => {
    const { status, error, data } = useQuery<ResponseData, Error>('vehicles', getVehicles);

    const goBack = () => {
        props.history.goBack();
    }

    const renderTableData = (vehiclesList: Vehicle[] | undefined) => {
        return vehiclesList && vehiclesList.map((vehicle, key) => {
            return (
                <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.passengers}</td>
                    <td>{vehicle.cargo_capacity}</td>
                </tr>
             )
        })
    }

    if (status === "loading") {
        return <Loader />
    }

    if (status === "error") {
        return <div>{error!.message}</div>;
    }

    return (
        <div className="container">
            <section>
                <header className="header">
                    <span onClick={goBack}>
                        <i className='fas fa-long-arrow-alt-left'></i>
                    </span>
                    <h1>Vehicles</h1>
                </header>

                <div className="table_container">
                    <table className="table_wrap">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Passengers</th>
                                <th>Cargo Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData(data && data.results)}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Vehicles;