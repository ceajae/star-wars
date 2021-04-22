import { useQuery } from "react-query";
import { getPeople } from "../utils/api";

import Loader from "../common/loader";

type Person = {
    name: string,
    gender: string,
    birth_year: string,
}

type ResponseData = {
    results: Person[],
}

const People = (props: any) => {
    const { status, error, data } = useQuery<ResponseData, Error>('people', getPeople);

    const goBack = () => {
        props.history.goBack();
    }
    
    const renderTableData = (peopleList: Person[] | undefined) => {
        return peopleList && peopleList.map((person, key) => {
            return (
                <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{person.name}</td>
                    <td>{person.gender}</td>
                    <td>{person.birth_year}</td>
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
                    <h1>People</h1>
                </header>

                <div className="table_container">
                    <table className="table_wrap">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Birth Year</th>
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

export default People;