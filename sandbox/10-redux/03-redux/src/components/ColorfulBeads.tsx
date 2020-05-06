import React, { FC } from 'react';
import { Container, Label, SemanticCOLORS } from 'semantic-ui-react';

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i));
const colors: SemanticCOLORS[] = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

export interface ColorfulBeadsProps {
  count?: number;
}

const ColorfulBeads: FC<ColorfulBeadsProps> = ({ count = 0 }) => (
  <Container className="beads-box">
    <p>Beads:</p>
    {range(count).map((i: number) => (
      <Label circular color={colors[i % colors.length]} key={i} />
    ))}
  </Container>
);

export default ColorfulBeads;
