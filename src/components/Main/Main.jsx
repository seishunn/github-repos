import React, {useEffect, useState} from 'react';
import './Main.less';
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../API";
import Loader from "../Loader/Loader";
import {Input, Pagination, Alert, Space } from "antd";
import Repo from "./Repo/Repo";
import {setCurrentPage} from "../../reducers/repos-reducer";

const {Search} = Input;

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.perPage);
    const isFetchError = useSelector(state => state.repos.isFetchError);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage));
    }, [currentPage])

    function searchHandler(searchValue) {
        dispatch(setCurrentPage(1));
        dispatch(getRepos(searchValue));
    }

    return (
        <div>
            {
                isFetchError && (
                    <Space direction="vertical" style={{ width: '100%' }}>
                        <Alert
                            message="Error"
                            description="An error has occurred! Please refresh the page!"
                            type="error"
                            showIcon
                        />
                    </Space>
                )
            }
            <Search
                placeholder="input search text"
                enterButton size={"large"}
                loading={isFetching}
                style={{margin: "10px 0"}}
                value={searchValue}
                onChange={(e) => {setSearchValue(e.target.value)}}
                onSearch={() => searchHandler(searchValue)}
            />
            {isFetching
                ? <Loader/>
                : repos.map(repo => <Repo repo={repo}/>)
            }
            <Pagination
                defaultCurrent={currentPage}
                total={totalCount}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px 0'
                }}
                onChange={(page) => dispatch(setCurrentPage(page))}
            />
        </div>
    );
};

export default Main;