import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify"> Blog pessoal construido durante o Segundo e terceiro Módulo do BootCamp de Java FullStack - Generation Brasil - Turma 64 Colméia Tech. Utilizando as ferramentas passadas durante as aulas, acompanhado do conteúdo passado e pelas explicações das instrutoras <strong>Liza e Aimee</strong> e do instrutor <strong>Luis Roberto</strong>, o Blog Pessoal foi criado desde o código inicial (Hello World) até o site que está disponibilizado no momento ao usuário que está nesse momento logado. </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;