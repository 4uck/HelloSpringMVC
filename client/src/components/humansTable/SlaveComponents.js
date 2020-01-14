import React from "react";

export function TableHead() {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Sex</th>
                <th scope="col">City</th>
            </tr>
        </thead>
    )
}

export function TableBody(props) {
    return (
        <tbody> {
            props.humans.map((human, index) =>
                <tr onClick={() => console.log("open edit page")}>
                    <th scope="row">{index}</th>
                    <td>{human.name}</td>
                    <td>{human.sex}</td>
                    <td>{human.registrationCity}</td>
                </tr>
            )
        }
        </tbody>
    )
}