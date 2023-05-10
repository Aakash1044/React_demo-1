import { Component } from "react";

const TableHeader = ()=> {
    return(<threat>
        <tr>
            <th> Name </th>

            <th> Job </th>

            <th> Action </th>
        </tr>
    </threat>)
}

const TableBody =(props)=>{
    const {charccdata,removecharcc} = props

        const rows = charccdata.map((character,index)=>{
            return(
                <tr key={index}><td>{character.name}</td><td>{character.job}</td>
                <td><button onClick={()=>removecharcc(index)}>Delete</button></td></tr>
            )

        })
    return(<tbody>
        {rows}
        
    </tbody>)
}

class Table extends Component{
    render(){
        const {charccdata,removecharcc} = this.props
        
        return(
            <table>
                <TableHeader/>
                <TableBody removecharcc = {removecharcc}    charccdata = {charccdata}/>
                
                
            </table>
        )
    }


}
export default Table;