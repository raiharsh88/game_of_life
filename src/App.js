import { useEffect, useState } from "react";
import { Cell, Content, GridWrapper, Rows } from "./styled/apps"
import "/node_modules/bootstrap/dist/css/bootstrap.css"
const size = 50;
function App() {
    const [grid, setGrid ] = useState(new Array(size).fill(new Array(size).fill(0)))
    const [itr , setItr ] = useState(0)
  // function drawGrid(rows , cols){


  // }
  
  function updateGrid (){
    let temp  =grid.map(row =>row.slice())
    for (let i  = 1 ; i < grid.length -1; i+=1){
        for(let j = 1 ; j < grid[0].length-1 ; j+=1){
          let count = 0
          for (let [x,y] of [[1,0] , [0,1],[-1,0],[0,-1] ,[1,-1],[-1,1],[1,1],[-1,-1]]){
           count += grid[i+x][j+y];
          }
          // if(count > 0){
          //   console.log('Count is ' , count , i ,j)
          // }

          if (grid[i][j] == 0 && count==3){
            temp[i][j] = 1
          }else if((grid[i][j] == 1 && count> 3) || (grid[i][j] == 1 && count <2) ){
            temp[i][j] = 0
          }
        }
    }

    // console.log('Grid' ,itr)

    setGrid(temp)
    // setItr(old=>old+1)
  }

  useEffect(() => {
    console.log('Setting grid')// ,grid)
 
    
    let temp = grid.map(row =>row.slice())


    for(let i = 1 ;i<700; i+=1){

      temp[parseInt(Math.random()*49)][parseInt(Math.random()*49)] = 1
    }

    setGrid(temp)
    setItr(old=> old+1)
  
  },[])

  useEffect(() => {
    setTimeout(() => {
      updateGrid()
    },1)
  },[grid])
  return (

    <Content>
      <GridWrapper>


      {
        grid.map((row , i) => {
          return <Rows key={"row_"+i}>
            {row.map((el , j) => {
              return <Cell key={"cells_"+j} bg = {grid[i][j]}></Cell>
            })}
          </Rows>
        })
      }
      </GridWrapper>

    </Content>
  );
}

export default App;
