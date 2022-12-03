import React from 'react';
import './App.less';
import Main from "./Main/Main";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import Card from "./card/Card";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Content className="site-layout">
                    <div className="container">
                        <Routes>
                            <Route path={'/'} element={<Main/>}/>
                            <Route path={'/card/:username/:reponame'} element={<Card/>}/>
                            <Route path={'/*'} element={<Navigate to={'/'}/>}/>
                        </Routes>
                    </div>
                </Content>
            </Layout>
        </BrowserRouter>
    );
};

export default App;