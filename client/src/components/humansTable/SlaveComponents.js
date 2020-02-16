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
                <tr onClick={() => props.handleClick(human.id)}>
                    <th scope="row">{index}</th>
                    <td>{human.name}</td>
                    <td>{props.getSexTranslation(human.sex)}</td>
                    <td>{human.registrationCity}</td>
                </tr>
            )
        }
        </tbody>
    )
}