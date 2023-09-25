import React, { useEffect, useState } from 'react'
import  axios   from 'axios'
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';

function App() {

  const [data, setData] = useState([])
  


  //fetching data 
  useEffect(()=>{
    axios.get('https://api.punkapi.com/v2/beers').then((res)=>{
      console.log(res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })

  },[])
  

  return (
    <>
    <Box  sx={{width:'80vw', margin:"20px auto"}}>

      <Typography sx={{textAlign:"center",  display: data.length == 0 ? 'blobk' : 'none'}} variant='h2'>Data is not available</Typography>
      
      {
        data.map((data)=>{
          return(


            <Card sx={{ width:{xs:"100%", md:"60%"}, margin:"20px auto"}}>
        <CardMedia 
          sx={{ height: '5%' , width:"10%", justifyContent:"center", margin:"10px auto"}}
          component="img"
          height="10"
          image= {data.image_url}
          title="green iguana"
          />

          <CardContent>
            <Typography gutterBottom   variant="h5" component="div">{data.name}</Typography>
            <Typography variant='body2'color="text.secondary">{data.description}</Typography>
          </CardContent>
          <Stack direction={'column'} spacing={1} sx={{margin:"10px 30px"}}>
            <Typography variant='body2'>{`Boil valume value : ${data.boil_volume.value}`}</Typography>
            <Typography variant='body2'>{`Tagline : ${data.tagline}`}</Typography>
          </Stack>

      </Card>
          )
        })
      }

    </Box>
    

    

    

    

    
    </>
  );
}

export default App;
