import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

const ListBox = styled.ul`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Item = styled.li`
  padding: 2rem 1rem;
  border: 1px solid orange;
  text-align: center;
`;

const ItemName = styled.h3`
  padding: 1rem;
  text-transform: capitalize;
`;

const ButtonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

const Button = styled.button<{ type: string }>`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme[props.type]};
  border-radius: 5px;
  text-transform: capitalize;
  box-shadow: #fff 0px 30px 40px -2em inset; 
`;

type Pokemon = {
  name: string;
  url: string;
  id: number;
  types: {
    slot: number;
    type: { name: string; url: string }
  }[];
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: object;
    versions: object;
  };
};

const List = () => {
  const [list, setList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const response =
          await axios('https://pokeapi.co/api/v2/pokemon/?limit=12');
        const json = response.data.results;
        const list = json.map(async (poke: Pokemon) => {
          const pokemon = await axios(`${poke.url} `);
          return pokemon.data;
        });

        setList(await Promise.all(list));
      } catch (error) {
        console.log(error);
      }
    };

    getList();
  }, [])

  return (
    <ListBox>
      {list.map(pokemon => (
        <Item key={pokemon.name}>
          <img src={`${pokemon.sprites.front_shiny} `}
            alt={`${pokemon.name} `} />

          <ItemName>{pokemon.name}</ItemName>

          <ButtonsList>
            {pokemon.types.map(({ type }) => (
              <li key={type.name}>
                <Button type={type.name}>{type.name}</Button>
              </li>
            ))}
          </ButtonsList>
        </Item>
      ))}
    </ListBox>
  );
};

export default List;
