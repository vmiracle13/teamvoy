import React from 'react';

import styled from 'styled-components/macro';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    border-collapse: collapse;
    border: 1px solid #e28743;
    padding: 0.4rem 0.5rem;
    text-transform: capitalize;
  }

  tr td:first-child {
    width: 70%;
  }
  tr td:last-child {
    width: 30%;
  }
`;

type TableType = {
  stats: Record<string, number>;
  types: string[];
  moves: number;
  weight: number;
};

const SelectedItemTable = ({
  types, moves, weight,
  stats: {
    attack, defense, hp, specialAttack,
    specialDefense, speed
  }
}: TableType) => (
  <Table>
    <tbody>
      <tr>
        <td>Type</td>
        <td>{types.map(type => (<p key={type}>{type}</p>))}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td>{attack}</td>
      </tr>

      <tr>
        <td>Defense</td>
        <td>{defense}</td>
      </tr>
      <tr>
        <td>HP</td>
        <td>{hp}</td>
      </tr>
      <tr>
        <td>Speed</td>
        <td>{speed}</td>
      </tr>
      <tr>
        <td>SP Attack</td>
        <td>{specialAttack}</td>
      </tr>
      <tr>
        <td>SP Defense</td>
        <td>{specialDefense}</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>{weight}</td>
      </tr>
      <tr>
        <td>Moves</td>
        <td>{moves}</td>
      </tr>
    </tbody>
  </Table>
);

export default SelectedItemTable;
