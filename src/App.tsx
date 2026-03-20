import { useState } from 'react';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import Img from './components/Img';
import HeroImage from './components/HeroImage';
import Card from './components/Card';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableFooter,
} from './components/Table';

function App() {
  const [selected, setSelected] = useState('1');

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Nguyen Roline UI Garden</h1>

      {/* Button */}
      <section>
        <h2>Button</h2>
        <Button label="Primary Button" />
        <br />
        <br />
        <Button label="Disabled Button" disabled />
      </section>

      <hr />

      {/* Label */}
      <section>
        <h2>Label</h2>
        <Label text="Default Label" />
        <br />
        <br />
        <Label text="Disabled Label" disabled />
      </section>

      <hr />

      {/* Text */}
      <section>
        <h2>Text</h2>
        <Text text="This is default text." />
        <br />
        <br />
        <Text text="This text is disabled." disabled />
      </section>

      <hr />

      {/* Dropdown */}
      <section>
        <h2>Dropdown</h2>
        <Dropdown
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
          ]}
        />
        <br />
        <br />
        <Dropdown
          options={[
            { label: 'Disabled 1', value: '1' },
            { label: 'Disabled 2', value: '2' },
          ]}
          disabled
        />
      </section>

      <hr />

      {/* Radio Button */}
      <section>
        <h2>Radio Button</h2>
        <RadioButton
          name="example"
          value="1"
          label="Option 1"
          checked={selected === '1'}
          onChange={(value) => setSelected(value)}
        />

        <br />

        <RadioButton
          name="example"
          value="2"
          label="Option 2"
          checked={selected === '2'}
          onChange={(value) => setSelected(value)}
        />

        <br />

        {/* Disabled Radio */}
        <RadioButton
          name="example"
          value="3"
          label="Disabled Option"
          checked={selected === '3'}
          disabled
          onChange={(value) => setSelected(value)}
        />
      </section>

      <hr />

      {/* Image */}
      <section>
        <h2>Image</h2>
        <Img
          src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*"
          alt="Sample Image"
          width="300px"
        />
        <br />
        <Img
          src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*"
          alt="Sample Image"
          width="300px"
          disabled
        />
      </section>

      <hr />

      {/* Hero Image */}
      <section>
        <h2>Hero Image</h2>
        <HeroImage
          imageUrl="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*"
          title="Hero Title"
          subtitle="Hero subtitle example"
          backgroundColor="rgba(0, 0, 0, 0.4)"
        />
        <br />
        <br />
        <HeroImage
          imageUrl="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*"
          title="Disabled Hero"
          subtitle="Disabled state example"
          disabled
        />
      </section>

      <hr />

      {/* Card */}
      <section>
        <h2>Card</h2>
        <Card title="Card Title" content="This is a card example." />
        <br />
        <br />
        <Card title="Disabled Card" content="This card is disabled." disabled />
      </section>

      <hr />

      {/* Table */}
      <section>
        <h2>Table</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Age</TableHeaderCell>
              <TableHeaderCell>Address</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Phone</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <tbody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>25</TableCell>
              <TableCell>123 Main St</TableCell>
              <TableCell>john@email.com</TableCell>
              <TableCell>204-000-0000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane</TableCell>
              <TableCell>30</TableCell>
              <TableCell>456 Portage Ave</TableCell>
              <TableCell>jane@email.com</TableCell>
              <TableCell>204-000-0101</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Smith</TableCell>
              <TableCell>45</TableCell>
              <TableCell>789 Happy Ave</TableCell>
              <TableCell>smith@email.com</TableCell>
              <TableCell>204-000-1111</TableCell>
            </TableRow>
          </tbody>

          <TableFooter>
            <TableRow>
              <TableCell>Total Rows</TableCell>
              <TableCell>3</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>

      <hr />

      {/* Table disabled */}
      <section>
        <h2>Table Disabled</h2>
        <Table disabled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Age</TableHeaderCell>
              <TableHeaderCell>Address</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Phone</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <tbody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>25</TableCell>
              <TableCell>123 Main St</TableCell>
              <TableCell>john@email.com</TableCell>
              <TableCell>204-000-0000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane</TableCell>
              <TableCell>30</TableCell>
              <TableCell>456 Portage Ave</TableCell>
              <TableCell>jane@email.com</TableCell>
              <TableCell>204-000-0101</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Smith</TableCell>
              <TableCell>45</TableCell>
              <TableCell>789 Happy Ave</TableCell>
              <TableCell>smith@email.com</TableCell>
              <TableCell>204-000-1111</TableCell>
            </TableRow>
          </tbody>

          <TableFooter>
            <TableRow>
              <TableCell>Total Rows</TableCell>
              <TableCell>3</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
    </div>
  );
}

export default App;
