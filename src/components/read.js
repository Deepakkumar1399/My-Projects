import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table , Button } from 'semantic-ui-react'

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://64721ac46a9370d5a41b09fb.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
       
    }, [])
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
}
    const getData = () => {
    axios.get(`https://64721ac46a9370d5a41b09fb.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
        }
    const onDelete = (id) => {
    axios.delete(`https://64721ac46a9370d5a41b09fb.mockapi.io/fakeData/${id}`)
    .then(() => {
        getData();
    })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header> 
                <Table.Body>
  {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
           <Link to='/update'>
           <Table.Cell> 
                <Button onClick={() => setData(data)}>Update</Button>
            </Table.Cell>
            </Link>
            <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
            </Table.Cell>
        </Table.Row>
   )})}
        </Table.Body>
            </Table>
        </div>
    )
}
