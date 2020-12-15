import { Button, Header, Card } from "semantic-ui-react";

const Menu = ({ id, name, deleteMenu, updateMenu }) => {
  return (
      // <Card.Group>
        <Card color="green">
          <Card.Content>
            <Card.Header>
              <h1 style={{color: "DarkOliveGreen"}}>{name}</h1>
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='blue' onClick={() => updateMenu(id)} >
                Update
              </Button>
              <Button basic color='red' onClick={() => deleteMenu(id)} >
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      // </Card.Group>

  //   <Card color='olive'>
  //       <Header color="red" as="h1">{name}</Header>
  //       <Button onClick={() => updateMenu(id)} basic color="blue" size="mini">
  //         Change
  //       </Button>
  //       <Button onClick={() => deleteMenu(id)} basic color="red" size="mini">
  //         Delete
  //       </Button>
  // </Card>
  );
};

export default Menu;